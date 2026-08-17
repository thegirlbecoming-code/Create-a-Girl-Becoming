// creator.js

class GirlCreator {

    constructor() {

        this.state = {

            background: "",
            body: "",
            eyes: "",
            nose: "",
            mouth: "",
            hairBack: "",
            hairFront: "",
            outfit: "",
            accessory: ""

        };

        this.optionContainer =
            document.getElementById("options");

        this.setup();

    }

    setup() {

        document.querySelectorAll("[data-tab]")

        .forEach(button => {

            button.addEventListener("click", () => {

                this.openCategory(
                    button.dataset.tab
                );

            });

        });

    }

    openCategory(category) {

        this.optionContainer.innerHTML = "";

        switch(category){

            case "hair":

                Assets.hair.forEach(hair=>{

                    this.makeButton(

                        hair.name,

                        ()=>{

                            this.state.hairBack =
                                hair.back;

                            this.state.hairFront =
                                hair.front;

                            Renderer.renderCharacter(
                                this.state
                            );

                        }

                    );

                });

            break;

            case "outfit":

                Assets.outfits.forEach(outfit=>{

                    this.makeButton(

                        outfit.name,

                        ()=>{

                            this.state.outfit =
                                outfit.image;

                            Renderer.renderCharacter(
                                this.state
                            );

                        }

                    );

                });

            break;

            case "accessory":

                Assets.accessories.forEach(item=>{

                    this.makeButton(

                        item.name,

                        ()=>{

                            this.state.accessory =
                                item.image;

                            Renderer.renderCharacter(
                                this.state
                            );

                        }

                    );

                });

            break;

            case "background":

                Assets.backgrounds.forEach(bg=>{

                    this.makeButton(

                        bg.id,

                        ()=>{

                            this.state.background =
                                bg.image;

                            Renderer.renderCharacter(
                                this.state
                            );

                        }

                    );

                });

            break;

            case "face":

                this.faceMenu();

            break;

        }

    }

    faceMenu(){

        const title =
            document.createElement("h3");

        title.textContent =
            "Face";

        this.optionContainer.appendChild(title);

        Assets.eyes.forEach(eye=>{

            this.makeButton(

                eye.name,

                ()=>{

                    this.state.eyes =
                        eye.image;

                    Renderer.renderCharacter(
                        this.state
                    );

                }

            );

        });

        Assets.noses.forEach(nose=>{

            this.makeButton(

                nose.id,

                ()=>{

                    this.state.nose =
                        nose.image;

                    Renderer.renderCharacter(
                        this.state
                    );

                }

            );

        });

        Assets.mouths.forEach(mouth=>{

            this.makeButton(

                mouth.id,

                ()=>{

                    this.state.mouth =
                        mouth.image;

                    Renderer.renderCharacter(
                        this.state
                    );

                }

            );

        });

    }

    makeButton(text,action){

        const button =
            document.createElement("button");

        button.className =
            "optionButton";

        button.textContent =
            text;

        button.onclick =
            action;

        this.optionContainer
            .appendChild(button);

    }

}

window.addEventListener(

    "DOMContentLoaded",

    ()=>{

        window.creator =
            new GirlCreator();

    }

);
