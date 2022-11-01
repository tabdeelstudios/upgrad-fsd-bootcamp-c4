var theaterName = "Inox";
var noOfSeats = 350;
var movieScreens = [10, 11, 12];
var restaurantDetails = ["MacD", 1];
var movieStatus;
(function (movieStatus) {
    movieStatus[movieStatus["Upcoming"] = 0] = "Upcoming";
    movieStatus[movieStatus["Ongoing"] = 1] = "Ongoing";
    movieStatus[movieStatus["Deleted"] = 2] = "Deleted";
})(movieStatus || (movieStatus = {}));
var tenet = movieStatus.Upcoming;
var theaterLocation;
theaterLocation = "Worli Naka";
theaterLocation = 400018;
