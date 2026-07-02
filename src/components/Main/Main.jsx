import React from 'react'
import './Main.css'

function Main() {
  const actors = [
    "Іньякі Годой (Монкі Д. Луффі)",
    "Емілі Радд (Намі)",
    "Макеню (Ророноа Зоро)",
    "Джейкоб Ромеро Гібсон (Усопп)",
    "Таз Скайлар (Санджі)"];

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
        <p>{actors.join(", ")}</p>
      </div>

    </div>
  )
}

export default Main