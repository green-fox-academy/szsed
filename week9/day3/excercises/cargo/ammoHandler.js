const ammoHandler = (queryParams, ship) => {
    const status = {
        received: queryParams.caliber,
        amount: queryParams.amount
    }

    ship[`caliber${queryParams.caliber.slice(1)}`] += Number(queryParams.amount);
    const totalAmmo = ship.caliber25 + ship.caliber30 + ship.caliber50;
    if (totalAmmo === 0) {
        ship.shipstatus = 'empty'
    } else if (totalAmmo > 0 && totalAmmo < 12500) {
        ship.shipstatus = `${Math.floor(totalAmmo / 12500 * 100)}%`;
    } else if (totalAmmo === 12500) {
        ship.shipstatus = 'full';
    } else if (totalAmmo > 12500) {
        ship.shipstatus = 'overloaded';
    }

    ship.ready = ship.shipstatus === 'full' ? true : false;
    status.shipstatus = ship.shipstatus;
    status.ready = ship.ready;

    return status;
}

module.exports = ammoHandler;