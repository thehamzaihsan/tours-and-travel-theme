$("#price-range").rangepicker({
    type: "double",
    startValue: 100,
    endValue: 10000,
    translateSelectLabel: function(currentPosition, totalPosition) {
        return parseInt(10000 * (currentPosition / totalPosition));
    }
});