<template>
   <nav role="navigation" class="navbar">
    <Logo/>
    <div class="nav-options">
        <ul class="menu-section">
            <MenuNavbar label="Features" :dropdownData="featuresData"/>
            <MenuNavbar label="Company" :dropdownData="companyData"/>
            <MenuNavbar label="Careers" />
            <MenuNavbar label="About" />
        </ul>

        <section class="auth-user">
            <Button label="Login"/>
            <Button label="Register"/>
        </section>
    </div>

    </nav>
</template>
<script>
import Logo from '../Logo.vue'
import MenuNavbar from './MenuNavbar.vue'
import Button from './Button.vue'
import { ref } from '@vue/reactivity'
export default{
    components: { Logo, MenuNavbar, Button },

    setup(){
        const featuresData = ref(['Todo List','Calendar','Reminders','Planning',]);
        const companyData = ref(['History','Our Team','Blog'])

    return {
        featuresData,
        companyData
    }
  
    }


}
</script>

<style scoped>
    .navbar{
        display: flex;
        align-items: center;
        width: 100%;
    }

    .nav-options{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .menu-section{
        display: flex;
        justify-content: space-between;
        width: 400px;
    }

    .auth-user{
        display:flex;
        gap: 1rem;
    }

</style>