let currentPage = 1, chaptersPerPage = 5;

const chapters = [
  {
    title: "梦蝶壹章：雾锁孤城",
    shortTitle: "梦蝶壹章 故事",
    filePath: "cside1_1.txt",
    id: 1,
    summary: "<span class='syslang'>&nbsp&nbsp作者：月见花竹鸢&nbsp&nbsp</span><br><br>独行玩家月见花绫栾在外出狩猎魔物时，<br>于薙峯霞林区域浓雾地带的深处发现了一座从未被玩家攻略所记载的超巨型日式城堡。<br><br>她将在不久后意识到，这便是坐落于整个薙峯霞林尽头的“迷宫地带”。<br>在最后静待着绫栾到来的，会是何样的高危险度头目怪物？<br><br>《妄想限界：白夜今明》系列的第一篇衍生故事，就此开启……",
  },
  {
    title: "梦蝶贰章：临世蔚然春华度",
    shortTitle: "梦蝶贰章 故事",
    filePath: "cside1_2.txt",
    id: 2,
    summary: "<span class='syslang'>&nbsp&nbsp作者：月见花竹鸢&nbsp&nbsp</span><br><br>月见花绫栾于竹内町的街道展开了探索。<br>当务之急是找到容身之地，不得风餐露宿……而“公会”成为了自己中意的首选住宅。<br><br>“小姐想要加入的话，需要完全熟悉一种日本古典才艺哦。”在准备申请加入公会时，绫栾面前这位名为河野葵的少女介绍道。<br>如果是针对战斗而言的话，自己的特长便是……<br>绫栾犹豫片刻，终向河野提出了“弓道”二字。",
  },
  {
    title: "梦蝶叁章：遽顾策隐神流歌",
    shortTitle: "梦蝶叁章 故事",
    filePath: "cside1_3.txt",
    id: 3,
    summary: "<span class='syslang'>&nbsp&nbsp作者：月见花竹鸢&nbsp&nbsp</span><br><br>计划在月星世界中稳步升级积累战斗经验的绫栾成功加入了津风礼社。<br>机缘巧合之下，她引起了自己的公会长二阶堂才新的注意。<br>面对刚开始熟悉游戏节奏的绫栾，才新却断然指派绫栾帮助自己完成一桩“任务”。<br><br>“才新小姐打算如此做的理由……会是什么呢。”<br>绫栾虽对此计划心怀疑虑，却仍旧遵循才新的指示展开了行动。",
  },
];
const characterAvailability = {
  1: [5],
  2: [5,9],
  3: [5,9,10],
};
const linktails = [
  {
    content: "也来浏览一下这些网站吧！",
    id: 1,
  },
];

var page = 0;
var listtext = document.getElementById("toggleTermList2");
listtext.innerHTML = `Pg.${page}`;

document.addEventListener("DOMContentLoaded", () => {
  const chapterList = document.getElementById("chapter-list"), chapterContent = document.getElementById("chapter-content"), tailLinks = document.getElementById("tail-links"), totalPages = Math.ceil(chapters.length / chaptersPerPage);

  async function displayChapterList() {
    chapterList.innerHTML = "";
    for (let i = (currentPage - 1) * chaptersPerPage; i < currentPage * chaptersPerPage && i < chapters.length; i++) {
      if (i != 4 || getCurrentPageIndex() == 4) {
        const listItem = document.createElement("li");
        listItem.classList.add("chapter-item");
        const titleElement = document.createElement("div");
        titleElement.textContent = chapters[i].title;
        const listLinker = document.createElement("a");
        listLinker.href = `mousou_side1_${i + 1}.html`;
        listItem.appendChild(listLinker);
        listLinker.appendChild(titleElement);
        listLinker.classList.add("chapter-link");
        const characterCount = await getCharacterCount(chapters[i].filePath);
        const characterCountElement = document.createElement("div"), readingTime = Math.round(characterCount / 1000);
        if (i == 4) {
          characterCountElement.textContent = `无规范时长 | ${Math.round(characterCount / 100)/100} 万字 `;
        } else {
        characterCountElement.textContent = `${readingTime} 分钟 | ${Math.round(characterCount / 100)/100} 万字 `;
        }
        characterCountElement.classList.add("chapter-character-count");
        listLinker.appendChild(characterCountElement);
        chapterList.appendChild(listItem);
      }
    }
    displayPagination(); setActiveChapterTitle();
  } 

  function displayPagination() {
    const pagination = document.createElement("div");
    pagination.className = "pagination";

    for (let i = 1; i <= totalPages; i++) {
      const pageNumber = document.createElement("button");
      pageNumber.textContent = i;
      pageNumber.className = "page-number";
      pageNumber.addEventListener("click", () => {
        currentPage = i;
        displayChapterList();
      });

      if (i === currentPage) {
        pageNumber.classList.add("active");
      }

      pagination.appendChild(pageNumber);
    }

    chapterList.appendChild(pagination);
    resetPageDirect(pagination);
  }
  displayChapterList();

  async function displayChapter(index) {
    try {
      const response = await fetch(chapters[index].filePath);
      const content = await response.text();
      chapterContent.innerHTML = `<p>${content}</p>`;
      setCharacterAvailability(index + 1);
      displayChapterSummary(index);
    } catch (error) {
      chapterContent.innerHTML = `<br><br><h3>“纵使此世由纷争与妄想所交叠纠缠，<br>汝之心念终将凝成赴往真实的微光。”</h3><br><br>`;
      setCharacterAvailability(0);
      displayChapterSummary(0);
    }
    displayTailLinks(0);
  }

  function displayTailLinks(index) {
    tailLinks.innerHTML = `<p>${linktails[index].content}</p>`;
  }

  function setCharacterAvailability(chapterId) {
    const availableCharacters = characterAvailability[chapterId] || [];
    const tabSelectors = document.querySelectorAll(".tab-selector");
    const characterLabels = document.querySelectorAll(".character-tab");
    const termLabels = document.querySelectorAll(".term-tab");
  
    tabSelectors.forEach((selector, index) => {
      selector.disabled = !availableCharacters.includes(index + 1);
    });
  
    characterLabels.forEach((label, index) => {
      if (!availableCharacters.includes(index + 1)) {
        label.classList.add("disabled");
      } else {
        label.classList.remove("disabled");
      }
    });
    termLabels.forEach((label, index) => {
      label.classList.remove("disabled");
    });
  }

  function setActiveChapterTitle() {
    const chapterListItems = document.querySelectorAll("#chapter-list li");
    const currentPageIndex = getCurrentPageIndex();
    chapterListItems.forEach((item, i) => {
      if (i === currentPageIndex) {
        item.classList.add("active");
        item.classList.add("active-side1");
      } else {
        item.classList.remove("active");
        item.classList.remove("active-side1");
      }
    });
  }
  function getCurrentPageIndex() {
    const currentPath = window.location.pathname;
    const chapterIndexRegex = /mousou_side1_(\d+)\.html/;
    const match = currentPath.match(chapterIndexRegex);
  
    if (match) {
      return parseInt(match[1]) - 1;
    } else {
      return 0;
    }
  }

  document.getElementById("toggleCharacterList").addEventListener("click", function () {
    const termList = document.getElementById("character-tabs");
    const termList2 = document.getElementById("character-tabs2");
    const termList3 = document.getElementById("character-tabs3");
    const characterList = document.getElementById("term-tabs");
    const characterList2 = document.getElementById("term-tabs2");
    const characterList3 = document.getElementById("term-tabs3");
    var listtext = document.getElementById("toggleCharacterList2");
    characterList.classList.add("hidden");
    if (characterList2 != null) {
      characterList2.classList.add("hidden");
    }
    if (characterList3 != null) {
      characterList3.classList.add("hidden");
    }
    page += 1;
    if (!(page >= 0)) {
      page = 0;
    }
    if (page == 2 && termList2 == null) {
      page = 0;
    }
    if (page == 3 && termList3 == null) {
      page = 0;
    }
    listtext.innerHTML = `Pg.${page}`;
    if (page == 0) {
      termList.classList.add("hidden");
      termList2.classList.add("hidden");
      termList3.classList.add("hidden");
    }
    if (page == 1) {
      termList.classList.remove("hidden");
      termList2.classList.add("hidden");
      termList3.classList.add("hidden");
    }
    if (page == 2) {
      termList.classList.add("hidden");
      termList2.classList.remove("hidden");
      termList3.classList.add("hidden");
    }
    if (page == 3) {
      termList.classList.add("hidden");
      termList2.classList.add("hidden");
      termList3.classList.remove("hidden");
    }
  });
  document.getElementById("toggleTermList").addEventListener("click", function () {
    const termList = document.getElementById("term-tabs");
    const termList2 = document.getElementById("term-tabs2");
    const termList3 = document.getElementById("term-tabs3");
    const termList4 = document.getElementById("term-tabs4");
    const characterList = document.getElementById("character-tabs");
    const characterList2 = document.getElementById("character-tabs2");
    const characterList3 = document.getElementById("character-tabs3");
    var listtext = document.getElementById("toggleTermList2");
    characterList.classList.add("hidden");
    if (characterList2 != null) {
      characterList2.classList.add("hidden");
    }
    if (characterList3 != null) {
      characterList3.classList.add("hidden");
    }
    page += 1;
    if (!(page >= 0)) {
      page = 0;
    }
    if (page == 2 && termList2 == null) {
      page = 0;
    }
    if (page == 3 && termList3 == null) {
      page = 0;
    }
    if (page == 4 && termList4 == null) {
      page = 0;
    }
    listtext.innerHTML = `Pg.${page}`;
    if (page == 0) {
      termList.classList.add("hidden");
      termList2.classList.add("hidden");
      termList3.classList.add("hidden");
    }
    if (page == 1) {
      termList.classList.remove("hidden");
      termList2.classList.add("hidden");
      termList3.classList.add("hidden");
    }
    if (page == 2) {
      termList.classList.add("hidden");
      termList2.classList.remove("hidden");
      termList3.classList.add("hidden");
    }
    if (page == 3) {
      termList.classList.add("hidden");
      termList2.classList.add("hidden");
      termList3.classList.remove("hidden");
    }
  });
  document.getElementById("toggleWorldMap").addEventListener("mouseover", function () {
    const worldMap = document.getElementById("world-map");
    worldMap.classList.toggle("hidden");
  });
  document.getElementById("toggleWorldMap").addEventListener("mouseout", function () {
    const worldMap = document.getElementById("world-map");
    worldMap.classList.toggle("hidden");
  });

  async function getCharacterCount(filePath) {
    try {
      const response = await fetch(filePath);
      const content = await response.text();
      return content.length;
    } catch (error) {
      console.error("Error fetching chapter content for character count:", error);
      return 0;
    }
  }
  function displayChapterSummary(index) {
    const summaryBox = document.getElementById("chapter-summary");
    summaryBox.innerHTML = `<h3>${chapters[index].shortTitle}概览</h3><p>${chapters[index].summary}</p>`;
  }
  currentPage = 1;
  for (let i = 1; i <= getCurrentPageIndex(); i++) {
    if (i / 5 === 1) {
      currentPage += 1;
    }
  }
  displayChapter(getCurrentPageIndex()); 
  setActiveChapterTitle();
  
});


