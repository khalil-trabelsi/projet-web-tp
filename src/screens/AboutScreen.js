const AboutScreen = {
  render: async () => {
    return `
        <div class="about">
        <section class="landing">
<div class="container">
  <div class="landing-info">
    <h1>Introduction</h1>
    <p>
      Nous sommes ravis de vous présenter notre plateforme de présentation
      de films et de séries  en ligne. Avec notre site web, vous
      pouvez découvrir des milliers de titres...
    </p>
  </div>
  <div class="image">
    <img src="/imgs/landing-image.png" alt="" />
  </div>
</div>
<a href="" class="go-down">
  <i class="fas fa-angle-double-down fa-2x"></i>
</a>
</section> 
        <main class="main" id="project">
        <div class="container">
          <table>
            <thead>
              <tr>
                <th colspan="4">Projet : Netflix Clone</th>
                <th>Année universitaire</th>
              </tr>
            </thead>
            <tbody>
              <tr class="release">
                <th rowspan="2">Réalisé par</th>
                <td>khalil</td>
                <td>Ammar</td>
                <td>Abir</td>
                <td colspan="4" rowspan="4">2022/2023</td>
              </tr>
              <tr class="sub-release">
                <td>TRABELSI</td>
                <td>ALI</td>
                <td>Fares</td>
              </tr>
              <tr class="formation">
                <th rowspan="4">Formation</th>
                <td rowspan="">Informatique</td>
                <td rowspan="">Math</td>
                <td rowspan="">Biologie</td>
              </tr>
            </tbody>
            <tfoot>
              <th rowspan="2">Date</th>
              <td colspan="4" rowspan="2"><span id="dateDay"></span></td>
            </tfoot>
          </table>
        </div>
      </main>
      <section  class="descrp">
        <h2 class="main-title">Description Du Projet</h2>
        <div class="container">
          <div class="image">
            <img src="/imgs/work-steps.png" alt="">
          </div>
          <p>       Notre objectif est d'implémenter une plaforme web consacrée aux films et series.
            Elle permet aux utilisateurs d'avoir une idée sur les films disponibles dans le monde en présentant le Synopsis,la bande annonce, les personnages, les témoingnages...</p>
  
        
        </div>
     </section>
     <section class="motivations">
          <div class="container">
            <h3 class="special-heading">les motivations de ce projet</h3>
            <p></p>
          </div>
      </section>
      <section class="caract">
          <div class="container">
            <h3 class="special-heading">
              les caractéristiques attendues du ce projet
            </h3>
            <p></p>
          </div>
      </section>
      <section class="etapes">
          <div class="container">
            <h3 class="special-heading">les étapes du projet</h3>
            <p></p>
            <ol>
              <li>Etape 1</li>
              <li>Etape 2</li>
              <li>Etape 3</li>
            </ol>
          </div>
        </div>
      </section>
        </div>
        
        `
  },
  after_render: async () => {

  }
}
export default AboutScreen;