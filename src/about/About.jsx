import React from "react";
import PageHeader from "../template/PageHeader";

export default (props) => {
  return (
    <div>
      <PageHeader name="Sobre" small="site"></PageHeader>
      <h2>Feito por</h2>
      <p>Tiago de Oliveira Gomes</p>
      <h2>Objetivo</h2>
      <p>
        Estudar o funcionamento do react e ampliar os conhecimentos sobre
        javascript, html ,css, redux (e seus middlewares) e funcionamento de
        banco de dados com mongoose.
      </p>
      <h2>Fontes</h2>
      <p>
        Principalmente conhecimentos adiquiridos pelo curso da Cod3r sobre React
        js com redux. Também documentação da "https://developer.mozilla.org/",
        assim como video aulas.{" "}
      </p>
      <h2>Links e contato</h2>
      <tr>
        <div>
          <p>{<i className="fa fa-envelope" />} Email: tyagoogomes@gmail.com</p>
        </div>
        <div>
          <p>
            {<i className="fa fa-linkedin" />} Linkedin:
            https://www.linkedin.com/in/tiago-oliveira-gomes-6446361b0/
          </p>
        </div>
        <div>
          <p>
            {<i className="fa fa-github" />} GitHub:
            https://github.com/TiagoOliveiraGomes
          </p>
        </div>
        <div>
          <p>
            {<i className="fa fa-phone" />} Mobile:
            84991357757
          </p>
        </div>
      </tr>
    </div>
  );
};
