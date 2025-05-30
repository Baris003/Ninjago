// Sidebar buttons

const sidebar = document.querySelector('.sidebar'); 

function openSidebar() {
    sidebar.style.display = 'flex';
}

function closeSidebar() {
    sidebar.style.display = "none";
}


//Sidebar Dropdown 

//Info
function sidebarInfoDropdown() {
    const sidebarInfoElements1 = document.getElementsByClassName('sidebar-info-page1');
    for (let i = 0; i < sidebarInfoElements1.length; i++) {
        sidebarInfoElements1[i].style.display = 'none';
    }

    document.querySelector('.sidebar-info-page2').style.display = "flex";
}


function sidebarInfoBack() {
    const sidebarInfoElements2 = document.getElementsByClassName('sidebar-info-page2');
    for (let i = 0; i < sidebarInfoElements2.length; i++) {
        sidebarInfoElements2[i].style.display = 'none';
    }

    const sidebarInfoElements1 = document.getElementsByClassName('sidebar-info-page1');
    for (let i = 0; i < sidebarInfoElements1.length; i++) {
        sidebarInfoElements1[i].style.display = 'flex';
    }
}