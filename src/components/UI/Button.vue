<template>
    <button>
        {{label}}
    </button>
</template>
<script>
export default{
    props : ['label']
}
</script>
<style scoped>
    button{
        border:none;
        background-color: hsl(0, 0%, 100%);
        cursor: pointer;
        padding: 1rem;
        font-weight: 500;
        font-size: 16px;
        border:solid 2px white;

    }

    button:hover{
        border:solid 2px black;
        border-radius: 20px;
    }
</style>