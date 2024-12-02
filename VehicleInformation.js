document.addEventListener('DOMContentLoaded', function() {
    const vehicleData = {
            '2024-Ford-Mustang': {
                title: '2024 Ford Mustang',
                img: 'https://hips.hearstapps.com/hmg-prod/images/2024-ford-mustang-gt-111-64e6608fce997.jpg?crop=0.546xw:0.615xh;0.0737xw,0.325xh&resize=768:*',
                TrimLevel: 'GT Premium Fastback',
                startingprice: '$47,380',
                engine: 'Gen-4 5.0L Coyote V8 engine',
                Horsepower: "486",
                torque: "418"
            },
            '2024-Ford-Bronco-Sport': {
                title: '2024 Ford Bronco Sport',
                img: 'https://www.briarwoodford.com/static/dealer-17694/24Ford-BroncoSport-ExteriorOffroadDesertSunRays-5x3.jpg',
                TrimLevel: 'Badlands',
                startingprice: '$38,390',
                engine: '2.0L 4-cylinder EcoBoost',
                Horsepower: "250",
                torque: "277"
            },
            '2024-Ford-Bronco': {
                title: '2024 Ford Bronco',
                img: 'https://build.ford.com/dig/Ford/Bronco/2024/HD-TILE%5BEXTBCK1%5D/Image%5B%7CFord%7CBronco%7C2024%7C1%7C1.%7C312A.E8B..PE7..887.89V.65H.43E.574.18D.4DR.64F.TFV.60R.ESO.X73.99H.50A.67X.59A.65P.58Z.SRS.17Q.65F.91S.ORB.44T.65C.LTV.%5D/EXT/4/vehicle.png',
                TrimLevel: 'Outer Banks',
                startingprice: '$47,940',
                engine: '3.0L Ti-VCT GTDI V6',
                Horsepower: "418",
                torque: "440"
            },
            '2024-Ford-Explorer': {
                title: '2024 Ford Explorer',
                img: 'https://pictures.dealer.com/m/mosesfordfd/1438/26d0d58d54ab319beb853fafeee704c7x.jpg?impolicy=downsize_bkpt&w=410" alt="2024 Ford Explorer',
                TrimLevel: 'ST-Line',
                startingprice: '$46,455',
                engine: '3.0L EcoBoost® V6',
                Horsepower: "400",
                torque: "415"
            },
            '2024-Ford-Edge': {
                title: '2024 Ford Edge',
                img: 'https://www.motortrend.com/uploads/2023/10/11-2024-Ford-Edge-front-view.jpg',
                TrimLevel: 'ST',
                startingprice: '$47,205',
                engine: '2.7L EcoBoost® V6 twin-turbocharged',
                Horsepower: "335",
                torque: "380"
            },
            '2024-Ford-Mustang-Mach-E': {
                title: '2024 Ford Mustang Mach-E',
                img: "https://media.drive.com.au/obj/tx_q:70,rs:auto:1920:1080:1/driveau/upload/cms/uploads/g9bmr7mialluenhxadsc",
                TrimLevel: 'GT',
                startingprice: '$54,995',
                engine: 'Dual eMotors',
                Horsepower: "480",
                torque: "700"
            },
            '2024-Ford-Expedition': {
                title: '2024 Ford Expedition',
                img: 'https://lp-auto-assets.s3.amazonaws.com/24/ford/expedition/M3/header.jpg',
                TrimLevel: 'Limited MAX',
                startingprice: '$71,515',
                engine: '3.5L EcoBoost® V6',
                Horsepower: "400",
                torque: "480"
            },
            '2024-Ford-F-150': {
                title: '2024 Ford F-150',
                img: 'https://images.jazelc.com/uploads/jimburkeford-m2en/24_C11054522_F150_Raptor_SprCrw_2VhclOffRdDesert.jpg',
                TrimLevel: 'Raptor',
                startingprice: '$78,540',
                engine: 'Supercharged 5.2L V8',
                Horsepower: "720",
                torque: "640"
            },
            '2024-Ford-Super-Duty': {
                title: '2024 Ford Super Duty',
                img: 'https://vehicle-images.dealerinspire.com/9559-110008455/1FT8W2BT9REC12366/b1b3dc1328ee3e38720ecadec2a9d4ea.jpg',
                TrimLevel: 'F-250 Limited',
                startingprice: '$97,095',
                engine: '6.7L Power Stroke V8 Turbo Diesel',
                Horsepower: "500",
                torque: "1,200"
            },
            '2024-Ford-F-150-Lightning': {
                title: '2024 Ford F-150 Lightning',
                img: 'https://images.hgmsites.net/hug/2024-ford-f-150-lightning_100899902_h.webp',
                TrimLevel: 'LARIAT',
                startingprice: '$76,995',
                engine: 'Dual eMotors',
                Horsepower: "580",
                torque: "775"
            },
            '2024-Ford-Transit': {
                title: '2024 Ford Transit',
                img: 'https://storage.googleapis.com/www.savvydealer.com/new/Ford/Transit/All-Trims/2024/Features/2024-Ford-Transit-Front.jpg',
                TrimLevel: 'Passenger Van XLT',
                startingprice: '$56,585',
                engine: '3.5L EcoBoost® V6',
                Horsepower: "310",
                torque: "400"
            },
            '2024-Ford-Ranger': {
                title: '2024 Ford Ranger',
                img: 'https://www.clickheretesting.com/TedBrittFairfax/research/2024/ranger/images/trim-2024-ranger-xlt.jpg',
                TrimLevel: 'XLT',
                startingprice: '$35,760',
                engine: '2.7L EcoBoost',
                Horsepower: "315",
                torque: "400"
            }
        // Add additional vehicles similarly
    };

    const trimSelector = document.getElementById('trimSelector');
    trimSelector.addEventListener('change', function() {
        const vehicle = vehicleData[this.value];
        document.getElementById('vehicleTitle').textContent = vehicle.title;
        document.getElementById('vehicleImage').src = vehicle.img;
        document.getElementById('vehicleImage').alt = vehicle.title;
        document.getElementById('TrimLevel').textContent = 'Trim Level: ' + vehicle.TrimLevel;
        document.getElementById('startingprice').textContent = 'Starting Price: ' + vehicle.startingprice;
        document.getElementById('engine').textContent = 'Engine: ' + vehicle.engine;
        document.getElementById('Horsepower').textContent = 'Horsepower: ' + vehicle.Horsepower;
        document.getElementById('torque').textContent = 'Torque: ' + vehicle.torque;
    });

    // Initialize the page with the first vehicle's data
    trimSelector.dispatchEvent(new Event('change'));

    function updateVehicleInfo(car) {
        if (vehicleData[car]) {
            const vehicle = vehicleData[car];
            document.getElementById('vehicleTitle').textContent = vehicle.title;
            document.getElementById('vehicleImage').src = vehicle.img;
            document.getElementById('vehicleImage').alt = vehicle.title + " Image";
            document.getElementById('TrimLevel').textContent = 'Trim Level: ' + vehicle.TrimLevel;
            document.getElementById('startingprice').textContent = 'Starting Price: ' + vehicle.startingprice;
            document.getElementById('engine').textContent = 'Engine: ' + vehicle.engine;
            document.getElementById('Horsepower').textContent = 'Horsepower: ' + vehicle.Horsepower;
            document.getElementById('torque').textContent = 'Torque: ' + vehicle.torque;
        } else {
            console.log('Vehicle data not found for: ' + car);
        }
    }

    // Get the vehicle ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const car = urlParams.get('car');

    if (car) {
        updateVehicleInfo(car);
    } else {
        console.log('No vehicle specified in URL');
    }
    
});
document.getElementById('compareButton').addEventListener('click', function() {
    const selectedVehicle = trimSelector.value;  // assuming trimSelector is your vehicle selector ID
    window.location.href = `compare.html?vehicle=${selectedVehicle}`;
});


