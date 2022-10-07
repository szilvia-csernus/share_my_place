import Modal from './UI/Modal';
import MapComponent from './UI/MapComponent';

class PlaceFinder {
    constructor() {
        const addressForm = document.querySelector('form');
        const locateUserBtn = document.getElementById('locate-btn');;

        locateUserBtn.addEventListener('click', this.locateUserHandler.bind(this));
        addressForm.addEventListener('submit', this.findAddressHandler)
    }

    selectPlace(coordinates) {
        if (this.map) {
            this.map.render(coordinates);
        } else {
            this.map = new MapComponent(coordinates);
        }
    }

    locateUserHandler() {
        if (!navigator.geolocation) {
            alert('Location feature is not available.')
            return;
        } else {
            const modal = new Modal('loading-modal-content');
            modal.show();
            navigator.geolocation.getCurrentPosition(
            successResult => {
                modal.hide();
                const coordinates = {
                    lat: successResult.coords.latitude,
                    lng: successResult.coords.longitude
                }
                this.selectPlace(coordinates)
            },
            error => {
                modal.hide();
                alert(`Unfortunately we could not locate you. ${error}`)
            });
        }
    }

    findAddressHandler(event) {
        event.preventDefault();

    }
}

const user = new PlaceFinder();