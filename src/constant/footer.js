export const teamLogo="./images/UBC_Agrobot.png";

export const menuItems = ['Home', 'Portfolio', 'Projects', 'Sponsorship', 'Recruitment', 'Contact Us', 'About Us', 'Shop'];

export const portfolioElement = [
    'Achievements',
    'Publications',
    'Gallery'
  ];
export const projectsElement = [
    'Agrobot',
    'AgroPonic'
  ];

export function footer_links() {
  
    return (
      <div  className='footer'>
        <div>
          <a><h4 class="title">Home</h4></a>
        </div>
        <div>
          <a><h4 class="title">Portfolio</h4></a>
          <a><p>Achievements</p></a>
          <a><p>Publications</p></a>
          <a><p>Gallery</p></a>
        </div>
        <div>
          <a><h4 class="title">Projects</h4></a>
          <a><p>AgroBot</p></a>
          <a><p>AgroPonic</p></a>
        </div>
        <div>
          <a><h4 class="title">Sponsorship</h4></a>
        </div>
        <div>
          <a><h4 class="title">Recruitment</h4></a>
        </div>
        <div>
          <a><h4 class="title">Contact Us</h4></a>
        </div>
        <div>
          <a><h4 class="title">About Us</h4></a>
        </div>
        <div>
          <a><h4 class="title">Shop</h4></a>
        </div>
      </div>
    );
  }


  
  
