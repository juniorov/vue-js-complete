<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col">
        <h3>{{ title }}</h3>
        <div class="form">
          <div class="form-group">
            <label for="">Titulo</label>
            <input type="text" class="form-control" v-model="note.title">
          </div>
          <div class="form-group">
            <label for="">Content</label>
            <textarea name="" id="" cols="30" rows="5" class="form-control" v-model="note.text"></textarea>
          </div>
          <div class="form-group">
            <button class="btn btn-success" @click="addNote">Add note</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col col-md-3" v-for="(note, index) in notes">
        <div class="card border-warning">
          <h5 class="card-header">{{ note.title }}</h5>
          <div class="card-body text-warning">
            <h5 class="card-title">{{ note.title }}</h5>
            <p class="card-text">{{ note.text }}</p>
            <button class="btn btn-danger" @click="deleteNote(index)">&times;</button>
          </div>
          <div class="card-footer">
            <small class="text-muted">{{ note.date }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Note Manage',
      note: {
        title: '',
        text: ''
      },
      notes: [
        {
          title: 'Ir al cine',
          text: 'nueva peli',
          date: new Date(Date.now()).toLocaleString()
        },{
          title: 'Avengers',
          text: 'La ultima',
          date: new Date(Date.now()).toLocaleString()
        }
      ]
    }
  },
  methods: {
    addNote: function(){
      let {text, title} = this.note;
      this.notes.push({
        text,
        title,
        date: new Date(Date.now()).toLocaleString()
      });
      this.note.title = '';
      this.note.text = '';
    },
    deleteNote: function(index){
      this.notes.splice(index,1);
    }
  }
}
</script>

<style>
  textarea{
    resize: none;
  }
</style>
