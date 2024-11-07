const menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  { text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  { text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];

// Style and configure the top menu
const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// Create top menu links
menuLinks.forEach(link => {
  const a = document.createElement("a");
  a.setAttribute("href", link.href);
  a.textContent = link.text;
  topMenuEl.append(a);
});

// Style and configure the main element
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.textContent = document.title;
mainEl.classList.add("flex-ctr");

// Style and configure the sub-menu
const subMenuEl = document.querySelector("#sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

const topMenuLinks = topMenuEl.querySelectorAll("a");

// Event listener to handle top menu clicks
topMenuEl.addEventListener('click', (evt) => {
  evt.preventDefault();

  // Ensure the clicked element is an <a> tag
  if (evt.target.tagName !== "A") return;

  console.log(evt.target.textContent);

  

  // If the clicked element does not yet have the 'active' class
  // If it does remove it
  if (!evt.target.classList.contains('active')) {
    topMenuLinks.forEach(link => link.classList.remove('active'))
    evt.target.classList.add('active');
    // Remove 'active' class from all links

    // Find the matching link object in menuLinks
    let clickedLink = menuLinks.find(link => link.text === evt.target.textContent);

    // Check if clickedLink has subLinks
    if (clickedLink && clickedLink.subLinks) {
      buildSubmenu(clickedLink);
      subMenuEl.style.top = '100%';
      
    } else {
      subMenuEl.style.top = '0%';
    }
  }else{
    evt.target.classList.remove('active')
    subMenuEl.style.top = "0%"
  }
  // created buildSubMenu helper function
  // Clears current contents of subMenuEl
  //Checks if clicked link has subLinks
  // Add text and href to subMenuLinks
  function buildSubmenu(clickedLink){
    subMenuEl.innerHTML = ''
    if (clickedLink.subLinks){
    clickedLink.subLinks.forEach(subLink =>{
    let subMenuLinks = document.createElement('a')
    subMenuLinks.href = subLink.href
    subMenuLinks.textContent = subLink.text
    subMenuEl.appendChild(subMenuLinks)
  })}
  

    }
  }
)
// Event Listener to handle subMenu clicks
subMenuEl.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (evt.target.tagName !== "A") return;
  console.log(evt.target.textContent);
  subMenuEl.style.top = 0;
  topMenuLinks.forEach(link => link.classList.remove('active'))
  let h1 = document.createElement('h1');
  h1.textContent = evt.target.textContent;
  mainEl.innerHTML = '';
  mainEl.appendChild(h1)

    
})
