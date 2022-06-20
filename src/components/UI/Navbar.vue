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
            <NavBarButton label="Login"/>
            <NavBarButton label="Register"/>
        </section>
    </div>

    </nav>
</template>
<script>
import Logo from '../Logo.vue'
import MenuNavbar from './MenuNavbar.vue'
import NavBarButton from './NavBarButton.vue'
import { ref } from '@vue/reactivity'
export default{
    components: { Logo, MenuNavbar, NavBarButton },

    setup(){
        const featuresData = ref([
            { icon : 'icon-todo', label : 'Todo List' },
            { icon : 'icon-calendar', label : 'Calendar' },
            { icon : 'icon-reminders', label : 'Reminders' },
            { icon : 'icon-planning', label : 'Planning' },
        ]);


        const companyData = ref([
            {label :'History'},
            {label :'Our Team'},
            {label :'Blog'}
        ]);


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