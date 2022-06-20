<template>
    <button :class="borderRadios">
        {{label}}
    </button>
</template>
<script>
import { computed } from '@vue/runtime-core'
export default{
    props : ['label'],

    setup(props){

        const borderRadios = computed(() => props.label === 'Register' ? 'border' : '')

        return {
            borderRadios
        }
    }
}
</script>
<style scoped>
    button{
        border:none;
        background-color: hsl(0, 0%, 100%);
        cursor: pointer;
        padding: 1rem 2rem;
        font-weight: 500;
        font-size: 16px;

    }
    .border{
        border:solid 1px hsl(0, 0%, 41%);
        border-radius: 20px;
    }
    .border:hover{
        border:solid 1px  hsl(0, 0%, 8%);

    }

</style>