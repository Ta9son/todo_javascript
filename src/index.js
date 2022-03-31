import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncmpleteList(inputText);
};

// 未完了リストから削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const createIncmpleteList = (text) => {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const p = document.createElement("p");
  const completeButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  const backButton = document.createElement("button");
  backButton.innerText = "戻す";

  backButton.addEventListener("click", () => {
    const deleteTarget = backButton.closest("li");
    document.getElementById("complete-list").removeChild(deleteTarget);
    const text = backButton.parentNode.firstElementChild.innerText;
    createIncmpleteList(text);
  });

  div.className = "list-row";
  p.innerText = text;

  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.closest("li"));

    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    // div 以下を初期化
    addTarget.textContent = null;
    p.innerText = text;

    addTarget.append(p);
    addTarget.append(backButton);
    li.appendChild(addTarget);
    document.getElementById("complete-list").appendChild(li);
  });

  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.closest("li"));
  });

  // 子要素に設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
