<template>
    <div>
        <div class="plan">
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
            precio:Number
        }
        // props:['nombre']
    }
</script>
<style>
</style>