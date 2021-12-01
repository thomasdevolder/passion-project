 const img = 'assets/img/pano.exr'
        const contai = document.querySelector(`.container`)

        //const panorama = new PANOLENS.ImagePanorama('assets/img/unsplash.jpg');
        const viewer = new PANOLENS.Viewer({ 
            container: contai, 
            autorotate: true,
            autoRotateSpeed: 0.2,
            output: console
        });
        
        //viewer.add(panorama);