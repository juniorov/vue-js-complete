<template>
    <div>
        <div @click="seleccionar" class="plan" :class="{ 'plan-activo':selected}">
            <div class="descripcion">
            <span class="titulo">{{ nombre }}</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Plan",
        props:{
            nombre: {
                type:String,
                default: 'Plan 1',
                required: true
            },
        },
        data(){
            return {
                selected: false
            }
        },
        methods:{
            seleccionar(){
                /** Crea un evento personalizado para enviar datos al padre */
                this.$emit('select', this.nombre);
                this.selected = !this.selected;
            }
        }
    }
</script>
<style>
</style>