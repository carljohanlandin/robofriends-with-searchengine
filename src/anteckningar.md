### Orgnaisation och struktur för filer

Skapa en mapp i src för alla komponenter ./components
Skapa en mapp för alla smarta komponenter (de .js filer som har ett state) -> ./containers


### Destructuring

const ({ robots, searchfield}) = this.state;

Istället för att nu skriva this.state.robots.filter()
kan man nu skriva robots.filter() exempelvis.

