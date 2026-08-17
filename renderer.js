// renderer.js

const Renderer = (() => {

    function updateLayer(layerId, imagePath) {
        const layer = document.getElementById(layerId);

        if (!layer) {
            console.warn(`Layer "${layerId}" not found.`);
            return;
        }

        layer.src = imagePath;
    }

    function renderCharacter(character) {

        updateLayer("bgLayer", character.background);

        updateLayer("bodyLayer", character.body);

        updateLayer("eyesLayer", character.eyes);

        updateLayer("noseLayer", character.nose);

        updateLayer("mouthLayer", character.mouth);

        updateLayer("hairBackLayer", character.hairBack);

        updateLayer("outfitLayer", character.outfit);

        updateLayer("accessoryLayer", character.accessory);

        updateLayer("hairFrontLayer", character.hairFront);

    }

    function clearCharacter() {

        const images = document.querySelectorAll("#character img");

        images.forEach(img => {
            img.removeAttribute("src");
        });

    }

    function preloadAssets(assetList) {

        assetList.forEach(asset => {

            const image = new Image();

            image.src = asset;

        });

    }

    return {

        renderCharacter,

        clearCharacter,

        preloadAssets

    };

})();
