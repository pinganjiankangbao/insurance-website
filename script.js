// 允许登录的手机号列表
const allowedPhones = ["15530959616", "18632943300", "18131943788", "17731952449"];

// 产品数据
const products = [
    {
        name: "平安e生保2025医疗保险产品组合",
        desc: "0-65岁可投，责任全面升级",
        price: 270.00,
        commission: "15%",
        link: "https://mcore.health.pingan.com/multi-pro/#/index?c=DLTGR&sc=427458A3ECD882809041BE70399D2030&g=AM100000308&post_id=unknown&open_id=oaaGdt18vyv8cTi7YjYey5A7qFDc&unionId=oQLyS54rYprF4TA_EP74cdmRTSxs&unionId=oQLyS54lXDafQSIA3klh7EPf4yAE&repost_id=d7bee0bf-771f-449f-af0c-8019e577306a&fromOpenId=oaaGdt18vyv8cTi7YjYey5A7qFDc&isSsyAgentShareLink=1"
    },
    // 其他产品数据...
];

// 显示登录弹窗
function showLogin() {
    document.getElementById("loginModal").style.display = "block";
}

// 隐藏登录弹窗
function hideLogin() {
    document.getElementById("loginModal").style.display = "none";
}

// 登录验证
function doLogin() {
    const phone = document.getElementById("phone").value;
    if (/^1[3-9]\d{9}$/.test(phone)) {
        if (allowedPhones.includes(phone)) {
            alert("登录成功！");
            hideLogin();
            // 显示产品列表
            document.getElementById("productContainer").style.display = "block";
            initProducts(); // 初始化产品列表
        } else {
            alert("该手机号无权限登录！");
        }
    } else {
        alert("请输入正确的手机号！");
    }
}

// 初始化产品
function initProducts() {
    const container = document.getElementById("products");
    let html = "";
    products.forEach(product => {
        html += `
        <div class="col-md-4 mb-4">
            <div class="product-card" onclick="window.open('${product.link}', '_blank')">
                <h5>${product.name}</h5>
                <p class="text-muted">${product.desc}</p>
                <div class="d-flex justify-content-between">
                    <h4 class="text-danger">¥${product.price}</h4>
                    <span class="badge bg-success">分享奖励 ${product.commission}</span>
                </div>
            </div>
        </div>
        `;
    });
    container.innerHTML = html;
}

// 页面加载完成后执行
window.onload = function() {
    // 页面加载时不显示产品列表
    document.getElementById("productContainer").style.display = "none";
};
