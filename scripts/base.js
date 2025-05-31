// Sidebar buttons
const sidebar = document.querySelector('.sidebar'); 

function openSidebar() {
    sidebar.style.display = 'flex';
}

function closeSidebar() {
    sidebar.style.display = "none";
}



//Sidebar Sections Menu
function toggleSidebarSection(section, action) {
    const page1Elements = document.getElementsByClassName('sidebar-page1');
    const page2Elements = document.getElementsByClassName(`sidebar-${section}-page2`);
    console.log(page1Elements)
    console.log(page2Elements)
    console.log(section, action)

    if (action === 'open') {
        for (let i = 0; i < page1Elements.length; i++) {
            page1Elements[i].style.display = 'none';
        }
        for (let i = 0; i < page2Elements.length; i++) {
            page2Elements[i].style.display = 'flex';
        }
    }

    else if (action === 'back') {
        for (let i = 0; i < page2Elements.length; i++) {
            page2Elements[i].style.display = 'none';
        }

        for (let i = 0; i < page1Elements.length; i++) {
            page1Elements[i].style.display = 'flex';
        }
    }
}

