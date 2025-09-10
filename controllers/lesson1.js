const maryRoute = (req, res) => {
    res.send("My friend's name is Mary");
};

const ronaldoRoute = (req, res) => {
    res.send('Ronaldo Campos Lucas');
};

const ulisesRoute = (req, res) => {
    res.send('My second name is Ulises');
};

module.exports = {
    ronaldoRoute,
    ulisesRoute,
    maryRoute
}