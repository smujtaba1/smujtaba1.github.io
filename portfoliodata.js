const chart = document.getElementById("myChart").getContext('2d');
let myChart= new Chart(chart,
  {
    type:"doughnut",
    data:{
      datasets:[{
        data:[70,10,15,20,5],
        backgroundColor:['#FE6185','#42AADC','#FE1B68','#9C344C','#173F53',]
      }],
      labels: [
          'Coding',
          'Boxing',
          'Forex/Stocks',
          'Netflix',
          'News'

      ]
    },
    options: {
      legend:{
        position:'bottom',
        align:'end',
        labels: {
          fontColor:'white'
        }
      }
    }
  }
)


let all_list =
  {
    react:
    [
      {
        title:"Jet-Strike",
        description:"A cool game I made based off the Android game: Alien Shooter",
        site_link:"smujtaba1.github.io/jet-strike",
        github_link:"github.com/smujtaba1/jet-strike",
        image:"./indexpics/jetstrike.png"
      }
    ],
    html_css:[
      {
        title:"Find the Pairs",
        description:"A simple game that trains your short-term memory",
        site_link:"smujtaba1.github.io/findthepairs.html",
        github_link:"github.com/smujtaba1/smujtaba1.github.io/blob/master/findthepairs.html",
        image:"./indexpics/findthepairs.png"
      }
    ],
    vanilla_js:[
      {
        title:"Find the Pairs",
        description:"A simple game that trains your short-term memory",
        site_link:"smujtaba1.github.io/findthepairs.html",
        github_link:"github.com/smujtaba1/smujtaba1.github.io/blob/master/findthepairs.html",
        image:"./indexpics/findthepairs.png"
      }
    ]

  };

  function generate_react (element){
    erase_underline();
    element.style.color="#FE1B68"
    let mountable_list = [];
    for(let i=0;i<all_list.vanilla_js.length;i++) {
      mountable_list.push(
        '<div class="project-card">' +
          '<div class="project-card-overlay"></div>'+
          '<img src=' + all_list.react[i].image + ' >' +
          '<h3>' + all_list.react[i].title + '</h3>' +
          '<div class="project-card-btn-box">' +
            '<div class="project-btn"><a href=https://' + all_list.react[i].website_link+ '>Launch</a></div>' +
            '<div class="project-btn"><a href=https://' + all_list.react[i].github_link + '>View Code</a></div>' +
          '</div>' +
        '</div>'
      )
    }
    document.querySelector('.projects-container').innerHTML=mountable_list;
  }

  function generate_all (element){
    let option_list=document.querySelector('.projects-list');
    if(element){
      erase_underline();
    }
    option_list.querySelectorAll("li")[0].style.color='#FE1B68';

    let mountable_list = [];
    for (group in all_list){
      for (let i=0;i<all_list[group].length;i++){
        mountable_list.push(
          '<div class="project-card">' +
            '<div class="project-card-overlay"></div>'+
            '<img src=' + all_list[group][i].image + ' >' +
            '<h3>' + all_list[group][i].title + '</h3>' +
            '<div class="project-card-btn-box">' +
              '<div class="project-btn"><a href=https://' + all_list[group][i].site_link + '>Launch</a></div>' +
              '<div class="project-btn"><a href=https://' + all_list[group][i].github_link + '>View Code</a></div>' +
            '</div>' +
          '</div>'
        )
      }
    }
    document.querySelector('.projects-container').innerHTML = mountable_list.join('');
  }

  function generate_html_css (element){
    erase_underline();
    element.style.color="#FE1B68"
    let mountable_list = [];
    for(let i=0;i<all_list.html_css.length;i++) {
      mountable_list.push(
        '<div class="project-card">' +
          '<div class="project-card-overlay"></div>'+
          '<img src=' + all_list.html_css[i].image + ' >' +
          '<h3>' + all_list.html_css[i].title + '</h3>' +
          '<div class="project-card-btn-box">' +
            '<div class="project-btn"><a href=https://' + all_list.html_css[i].website_link+ '>Launch</a></div>' +
            '<div class="project-btn"><a href=https://' + all_list.html_css[i].github_link + '>View Code</a></div>' +
          '</div>' +
        '</div>'
      )
    }
    document.querySelector('.projects-container').innerHTML=mountable_list;
  }

  function generate_vanilla_js (element){
    erase_underline();
    element.style.color="#FE1B68"
    let mountable_list = [];
    for(let i=0;i<all_list.vanilla_js.length;i++) {
      mountable_list.push(
        '<div class="project-card">' +
          '<div class="project-card-overlay"></div>'+
          '<img src=' + all_list.vanilla_js[i].image + ' >' +
          '<h3>' + all_list.vanilla_js[i].title + '</h3>' +
          '<div class="project-card-btn-box">' +
            '<div class="project-btn"><a href=https://' + all_list.vanilla_js[i].website_link+ '>Launch</a></div>' +
            '<div class="project-btn"><a href=https://' + all_list.vanilla_js[i].github_link + '>View Code</a></div>' +
          '</div>' +
        '</div>'
      )
    }
    document.querySelector('.projects-container').innerHTML=mountable_list;
  }

  function erase_underline() {

    let option_list=document.querySelector('.projects-list');
    console.log(option_list)
    for (let li=0;li<option_list.querySelectorAll("li").length;li++) {
      option_list.querySelectorAll("li")[li].style.color='#0084C4';
      console.log("FDSFD")
    }

  }

  generate_all();
