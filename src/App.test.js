//                    <Route path="/" exact render={() => <Redirect to="/start"/>}/>
//                    <Route exact path='/start'>
//                        <Start />
//                    </Route>
//                    <Route exact path='/photo'>
//                        <Photo />
//                    </Route>
//                    <Route exact path='/posts'>
//                        <Posts />
//                    </Route>
//                    <Route exact path='/contacts'>
//                        <Contacts />
//                    </Route>



<Route path="/start" component={Start}/>
                    <Route path="/photo" component={Photo}/>
                    <Route path="/posts" component={Posts}/>
                    <Route path="/contacts" component={Contacts}/>
                    {/*Menu.map(({path, component: Component, exact = false}) => (
                        <Route path = {path} exact = {exact} component = {Component}/>
                    ))*/}






<iframe width="560" height="315" src="https://www.youtube.com/embed/eW7Twd85m2g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
im
const BASE = 'https://swapi.dev/api/';
function getPersons() {
    const config = {
        method: 'GET',
        url: `${BASE}films/2/`,
        };

    return axios(config).then((res) => {
        return res.data.characters;
        }).catch(() => {
                console.dir('Trouble');
                return [];
        });
}

function renderPersons(users) {
    const container = document.querySelector('.persons');
    container.innerHTML = '';
    document.getElementById('planet').innerHTML = "";

    users.forEach( async character => {
        const i = character.replace(/^http:\/\//i, 'https://');

        const personI = await axios.get(i);

        const personEl =  document.createElement('div');
        personEl.className = 'person';


        const name = personI.data.name;

        personEl.innerHTML = `
            <div class="persons_data" id = "${name}">
                <h3>${personI.data.name}</h3>
                <p> <b>Birth year:</b> ${personI.data.birth_year}</p>
                <p> <b>Gender:</b> ${personI.data.gender}</p>
            </div>
        `;
        container.append(personEl);
    });

}