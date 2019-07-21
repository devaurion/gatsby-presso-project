import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Mantab jiwa" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae unde
              ut ea numquam beatae? Consequatur totam, debitis perspiciatis
              vitae sequi saepe eveniet, accusamus iure odit nihil sit fugiat
              nobis repellendus tenetur, quidem unde! Culpa, omnis numquam!
              Cupiditate odio nesciunt inventore voluptatibus adipisci debitis,
              modi corporis, quis laudantium iusto voluptas doloremque.
            </p>
            <Link to="/about/">
              <button className="btn btn-yellow text-uppercase">
                About page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
