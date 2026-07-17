import React, { Component } from 'react'
import './Main.css'

export class Main extends Component {
    constructor(props) {
    super(props);
    this.state = {
      actors: [
        { id: 1, name: "Іньякі Годой", role: "Монкі Д. Луффі" },
        { id: 2, name: "Емілі Радд", role: "Намі" },
        { id: 3, name: "Макеню", role: "Ророноа Зоро" },
        { id: 4, name: "Джейкоб Ромеро Гібсон", role: "Усопп" },
        { id: 5, name: "Таз Скайлар", role: "Санджі" }
      ]
    };
  }

  render() {
    return (
      <div className="movie-about">
        <h2>Серіал: One Piece</h2>
        <div className="movie-info">
          <p>Жанр: пригоди, фентезі, екшн</p>
          <p>Рік: 2023</p>
          <p>Країна: Японія, США</p>
          <p>Студія: Tomorrow Studios</p>
        </div>
        <div className="movie-description">
          <h3>Сюжет</h3>
          <p>
            Історія про молодого та відважного пірата Монкі Д. Луффі, який мріє
            знайти легендарний скарб «Ван-Піс» і стати Королем Піратів. Для цього
            він збирає власну унікальну команду «Піратів Солом'яного Капелюха»
            та вирушає у сповнену небезпек подорож океаном Grand Line.
          </p>
        </div>
        <div className="movie-actors">
          <h3>Актори</h3>
          <ul>
            {this.state.actors.map((actor) => (
              <li key={actor.id}>
                {actor.name} - {actor.role}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Main