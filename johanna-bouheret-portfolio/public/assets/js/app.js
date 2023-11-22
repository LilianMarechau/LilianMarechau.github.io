const app = {

    init:function() {
        const buttons = document.querySelectorAll('.header__navbar > a');
        for (const button of buttons) {
            button.addEventListener('click', app.handleChangeContent);
        }
        const formButton = document.querySelector('.link__form');
        formButton.addEventListener('click', app.handleChangeContent);


    },

    handleChangeContent: function(e) {
        app.ChangeClass(e);
        e.preventDefault;
        clickedButton = e.currentTarget;
        app.hideContent();
        switch (clickedButton.textContent) {
            case "Musique":
                console.log('OK musique');
                document.querySelector('.musique').classList.remove('hidden');
                if (clickedButton.classList.contains('navlink__content')) {
                    console.log('elle y est');
                    document.querySelector('.musique > div').classList.add('reverse__content');
                } else {
                    document.querySelector('.musique > div').classList.remove('reverse__content');
                }
                break;
            case "Photographie":
                console.log('OK photo');
                document.querySelector('.photographie').classList.remove('hidden');
                if (clickedButton.classList.contains('navlink__content')) {
                    console.log('elle y est');
                    document.querySelector('.photographie > div').classList.add('reverse__content');
                    const columnContainers = document.querySelectorAll('.photo__container-column');
                    for (const container of columnContainers) {
                        console.log(container);
                        container.classList.add('reverse__content');
                    }
                } else {
                    document.querySelector('.photographie > div').classList.remove('reverse__content');
                    const columnContainers = document.querySelectorAll('.photo__container-column');
                    for (const container of columnContainers) {
                        container.classList.remove('reverse__content');
                    }
                }
                break;
            case "À Propos":
                console.log('OK propos');
                document.querySelector('.a-propos').classList.remove('hidden');
                if (clickedButton.classList.contains('navlink__content')) {
                    console.log('elle y est');
                    document.querySelector('.a-propos > div').classList.add('reverse__content');
                } else {
                    document.querySelector('.a-propos > div').classList.remove('reverse__content');
                }
                break;
            case "Envoyer un message...":
                console.log('OK formulaire');
                document.querySelector('.formulaire').classList.remove('hidden');
                break;
        }
        document.querySelector('.footer').classList.remove('hidden');        
    },

    hideContent: function() {
        const contents = document.querySelectorAll('main > div');
        for (const content of contents) {
            content.classList.add('hidden');
        }
    },

    ChangeClass: function(e) {
        clickedButton = e.currentTarget;
        console.log(clickedButton);
        app.resetCurrentClass();
        switch (clickedButton.textContent) {
            case "À Propos":
                const aProposButtons = document.querySelectorAll(".header__navbar > a:nth-child(1)");
                for (const button of aProposButtons) {
                    button.classList.add('current');
                }
                break;
            case "Photographie":
                const photoButtons = document.querySelectorAll(".header__navbar > a:nth-child(2)");
                for (const button of photoButtons) {
                    button.classList.add('current');
                }
                break;
            case "Musique":
                const musiqueButtons = document.querySelectorAll(".header__navbar > a:nth-child(3)");
                for (const button of musiqueButtons) {
                    button.classList.add('current');
                }
                break;
        }
    },

    resetCurrentClass: function() {
        const buttons = document.querySelectorAll('.header__navbar > a');
        for (const button of buttons) {
            button.classList.remove('current');
        }
    }
}

document.addEventListener('DOMContentLoaded', app.init());

