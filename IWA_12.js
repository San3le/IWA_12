const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

const elements = document.querySelectorAll('.status, .reserve, .checkout, .checkin');

elements.forEach((element, index) => {
    const status = element.getAttribute('status');
    const statusProperties = STATUS_MAP[status];

    element.style.color = statusProperties.color;
    element.innerText = statusProperties.canReserve ? 'enabled' : 'disabled';
    element.disabled = !statusProperties.canCheckout;
    element.disabled = !statusProperties.canCheckIn;
});
