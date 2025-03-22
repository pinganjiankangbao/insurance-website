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
    {
        name: "平安双子星易保医疗保险",
        desc: "一箭双星，简易投保",
        price: 660.00,
        commission: "12%",
        link: "https://mcore.health.pingan.com/multi-pro/#/index?c=DLTGR&sc=427458A3ECD882809041BE70399D2030&g=AM100000306&post_id=unknown&open_id=oaaGdt18vyv8cTi7YjYey5A7qFDc&unionId=oQLyS54rYprF4TA_EP74cdmRTSxs&unionId=oQLyS54lXDafQSIA3klh7EPf4yAE&repost_id=55d53fb0-a056-41e7-b5fd-bb258c9623d9&fromOpenId=oaaGdt18vyv8cTi7YjYey5A7qFDc&isSsyAgentShareLink=1"
    },
    {
        name: "平安双子星2025医疗保险",
        desc: "重磅升级，闪耀上市",
        price: 580.00,
        commission: "12%",
        link: "https://mcore.health.pingan.com/multi-pro/#/index?c=DLTGR&sc=427458A3ECD882809041BE70399D2030&g=AM100000307&post_id=unknown&open_id=oaaGdt18vyv8cTi7YjYey5A7qFDc&unionId=oQLyS54rYprF4TA_EP74cdmRTSxs&unionId=oQLyS54lXDafQSIA3klh7EPf4yAE&repost_id=d4fc84be-70a9-4a99-8fbb-79bb8edb9e17&fromOpenId=oaaGdt18vyv8cTi7YjYey5A7qFDc&isSsyAgentShareLink=1"
    },
    {
        name: "平安颐享少儿高端1.0医疗保险",
        desc: "健康多一份保障 成长添十分安心",
        price: 9607.00,
        commission: "10%",
        link: "https://mcore.health.pingan.com/multi-pro/#/index?c=DLTGR&sc=427458A3ECD882809041BE70399D2030&g=AM100000348&post_id=unknown&open_id=oaaGdt18vyv8cTi7YjYey5A7qFDc&unionId=oQLyS54rYprF4TA_EP74cdmRTSxs&unionId=oQLyS54lXDafQSIA3klh7EPf4yAE&repost_id=a0618766-a1bf-460f-8219-bac2dccdd694&fromOpenId=oaaGdt18vyv8cTi7YjYey5A7qFDc&isSsyAgentShareLink=1"
    },
    {
        name: "平安颐享至选高端医疗保险",
        desc: "尊贵的就医体验 网罗全球先进医疗资源",
        price: 8000.00,
        commission: "10%",
        link: "https://mcore.health.pingan.com/multi-pro/#/index?c=DLTGR&sc=427458A3ECD882809041BE70399D2030&g=AM000001167&post_id=unknown&open_id=oaaGdt18vyv8cTi7YjYey5A7qFDc&unionId=oQLyS54rYprF4TA_EP74cdmRTSxs&unionId=oQLyS54lXDafQSIA3klh7EPf4yAE&repost_id=42818780-c0d3-4149-86fc-53a64f03edd5&fromOpenId=oaaGdt18vyv8cTi7YjYey5A7qFDc&isSsyAgentShareLink=1"
    },
    {
        name: "平安颐享易保高端医疗",
        desc: "免体检 易投保 特定疾病享全球臻选医院",
        price: 4800.00,
        commission: "10%",
        link: "https://mcore.health.pingan.com/multi-pro/#/index?c=DLTGR&sc=427458A3ECD882809041BE70399D2030&g=AM000001144&post_id=unknown&open_id=oaaGdt18vyv8cTi7YjYey5A7qFDc&unionId=oQLyS54rYprF4TA_EP74cdmRTSxs&unionId=oQLyS54lXDafQSIA3klh7EPf4yAE&repost_id=c6cb9ebd-2373-421f-b573-f42a08940ea2&fromOpenId=oaaGdt18vyv8cTi7YjYey5A7qFDc&isSsyAgentShareLink=1"
    },
    {
        name: "平安万元住院保2024医疗保险",
        desc: "0免赔，百万医疗的黄金搭档",
        price: 362.00,
        commission: "15%",
        link: "https://mcore.health.pingan.com/multi-pro/#/index?c=DLTGR&sc=427458A3ECD882809041BE70399D2030&g=AM000001056&post_id=unknown&open_id=oaaGdt18vyv8cTi7YjYey5A7qFDc&unionId=oQLyS54rYprF4TA_EP74cdmRTSxs&unionId=oQLyS54lXDafQSIA3klh7EPf4yAE&repost_id=9e4118ff-3a54-42af-9f87-2dd86f2b97e4&fromOpenId=oaaGdt18vyv8cTi7YjYey5A7qFDc&isSsyAgentShareLink=1"
    },
    {
        name: "平安e惠保简易健告医疗",
        desc: "最高投保年龄70周岁，特定亚健康、慢病人群也能投保",
        price: 416.00,
        commission: "15%",
        link: "https://mcore.health.pingan.com/multi-pro/#/index?c=DLTGR&sc=427458A3ECD882809041BE70399D2030&g=AM000000865&post_id=unknown&open_id=oaaGdt18vyv8cTi7YjYey5A7qFDc&unionId=oQLyS54rYprF4TA_EP74cdmRTSxs&unionId=oQLyS54lXDafQSIA3klh7EPf4yAE&repost_id=b929f518-7fa0-47fa-8fe6-81c70045b4a0&fromOpenId=oaaGdt18vyv8cTi7YjYey5A7qFDc&isSsyAgentShareLink=1"
    },
    {
        name: "平安颐享 (D) 高端医疗保险",
        desc: "名院名医直通 0现金就医 私人定制1V1专业医护团队",
        price: 4919.00,
        commission: "10%",
        link: "https://mcore.health.pingan.com/multi-pro/#/index?c=DLTGR&sc=427458A3ECD882809041BE70399D2030&g=AM000000884&post_id=unknown&open_id=oaaGdt18vyv8cTi7YjYey5A7qFDc&unionId=oQLyS54rYprF4TA_EP74cdmRTSxs&unionId=oQLyS54lXDafQSIA3klh7EPf4yAE&repost_id=f49df5d1-3cec-48cb-9af0-4d677fdf659e&fromOpenId=oaaGdt18vyv8cTi7YjYey5A7qFDc&isSsyAgentShareLink=1"
    },
    {
        name: "平安e生安.少儿健康保险B (2024版)产品组合",
        desc: "少儿百万级住院医疗保障，多款附加包灵活可选",
        price: 342.00,
        commission: "15%",
        link: "https://mcore.health.pingan.com/pageflow/#/index?c=DLTGR&sc=427458A3ECD882809041BE70399D2030&g=AM000000992&post_id=unknown&open_id=oaaGdt18vyv8cTi7YjYey5A7qFDc&repost_id=ef89bd60-07a2-49cd-a193-c071080640ea&fromOpenId=oaaGdt18vyv8cTi7YjYey5A7qFDc&isSsyAgentShareLink=1&unionId=oQLyS54lXDafQSIA3klh7EPf4yAE"
    },
    {
        name: "平安e生保.老年百万医疗保险",
        desc: "最高80岁可投，赠专业体检服务",
        price: 1069.00,
        commission: "15%",
        link: "https://mcore.health.pingan.com/multi-pro/#/index?c=DLTGR&sc=427458A3ECD882809041BE70399D2030&g=AM000000980&post_id=unknown&open_id=oaaGdt18vyv8cTi7YjYey5A7qFDc&unionId=oQLyS54rYprF4TA_EP74cdmRTSxs&unionId=oQLyS54lXDafQSIA3klh7EPf4yAE&repost_id=194b4569-8d82-4769-85ea-23881a3b8e54&fromOpenId=oaaGdt18vyv8cTi7YjYey5A7qFDc&isSsyAgentShareLink=1"
    },
    {
        name: "易诊无忧门诊保险",
        desc: "28天-65岁可投，计划灵活可选，疾病/意外门急诊全覆盖",
        price: 427.00,
        commission: "8%",
        link: "https://mcore.health.pingan.com/multi-pro/#/index?c=DLTGR&sc=427458A3ECD882809041BE70399D2030&g=AM000000904&post_id=unknown&open_id=oaaGdt18vyv8cTi7YjYey5A7qFDc&unionId=oQLyS54rYprF4TA_EP74cdmRTSxs&unionId=oQLyS54lXDafQSIA3klh7EPf4yAE&repost_id=c7e1ffe0-e772-4a46-9b69-3a3827f7a85f&fromOpenId=oaaGdt18vyv8cTi7YjYey5A7qFDc&isSsyAgentShareLink=1"
    },
    {
        name: "平安特定医疗保险",
        desc: "保障范围广 涵盖质重、特药等先进医疗保障",
        price: 90.00,
        commission: "15%",
        link: "https://mcore.health.pingan.com/multi-pro/#/index?c=DLTGR&sc=427458A3ECD882809041BE70399D2030&g=AM000000775&post_id=unknown&open_id=oaaGdt18vyv8cTi7YjYey5A7qFDc&unionId=oQLyS54rYprF4TA_EP74cdmRTSxs&unionId=oQLyS54lXDafQSIA3klh7EPf4yAE&repost_id=5987978c-5e13-48a9-84a7-478440ffcdc0&fromOpenId=oaaGdt18vyv8cTi7YjYey5A7qFDc&isSsyAgentShareLink=1"
    },
    {
        name: "平安e生保.慢病医疗 (2024升级)",
        desc: "特定慢病人群可投保，新增质子重离子医院及癌症特药清单拓展",
        price: 292.00,
        commission: "15%",
        link: "https://mcore.health.pingan.com/multi-pro/#/index?c=DLTGR&sc=427458A3ECD882809041BE70399D2030&g=AM000000543&post_id=unknown&open_id=oaaGdt18vyv8cTi7YjYey5A7qFDc&unionId=oQLyS54rYprF4TA_EP74cdmRTSxs&unionId=oQLyS54lXDafQSIA3klh7EPf4yAE&repost_id=accf564d-3578-4086-8d29-2579327b6ab3&fromOpenId=oaaGdt18vyv8cTi7YjYey5A7qFDc&isSsyAgentShareLink=1"
    },
    {
        name: "平安少儿健康保险产品组合 (A)",
        desc: "少儿健康的专属百万保障，住院、外、重疾全能保",
        price: 153.00,
        commission: "15%",
        link: "https://mcore.health.pingan.com/pageflow/#/index?c=DLTGR&sc=427458A3ECD882809041BE70399D2030&g=AM000000398&post_id=unknown&open_id=oaaGdt18vyv8cTi7YjYey5A7qFDc&repost_id=846a260c-32b2-4bdd-8cf2-ed757ada9aec&fromOpenId=oaaGdt18vyv8cTi7YjYey5A7qFDc&isSsyAgentShareLink=1&unionId=oQLyS54lXDafQSIA3klh7EPf4yAE"
    },
    {
        name: "平安荫牙保",
        desc: "1-17岁均可投保 无需健告 0等待期 0免赔",
        price: 365.00,
        commission: "20%",
        link: "https://mcore.health.pingan.com/multi-pro/#/index?c=DLTGR&sc=427458A3ECD882809041BE70399D2030&g=AM000000669&post_id=unknown&open_id=oaaGdt18vyv8cTi7YjYey5A7qFDc&unionId=oQLyS54rYprF4TA_EP74cdmRTSxs&unionId=oQLyS54lXDafQSIA3klh7EPf4yAE&repost_id=1b0fb74a-1dc1-471d-b1f9-e62338eaf79b&fromOpenId=oaaGdt18vyv8cTi7YjYey5A7qFDc&isSsyAgentShareLink=1"
    },
    {
        name: "平安终身防癌医疗险",
        desc: "年保额400万，终身保证续保，赠送100万质子重离子保险金",
        price: 100.00,
        commission: "25%",
        link: "https://mcore.health.pingan.com/pageflow/#/index?c=DLTGR&sc=427458A3ECD882809041BE70399D2030&g=AM000000003&post_id=unknown&open_id=oaaGdt18vyv8cTi7YjYey5A7qFDc&repost_id=763093cf-b46e-49c9-876f-460dcb3285f7&fromOpenId=oaaGdt18vyv8cTi7YjYey5A7qFDc&isSsyAgentShareLink=1&unionId=oQLyS54lXDafQSIA3klh7EPf4yAE"
    },
    {
        name: "平安短期综合意外险",
        desc: "28至80周岁可投，无需告知疾病情况多款计划可选，保障责任全面",
        price: 0.70,
        commission: "25%",
        link: "https://mcore.health.pingan.com/multi-pro/#/index?c=DLTGR&sc=427458A3ECD882809041BE70399D2030&g=AM100000150&post_id=unknown&open_id=oaaGdt18vyv8cTi7YjYey5A7qFDc&unionId=oQLyS54rYprF4TA_EP74cdmRTSxs&unionId=oQLyS54lXDafQSIA3klh7EPf4yAE&repost_id=610fc7ac-fdf1-4290-9542-3585af3c0fd3&fromOpenId=oaaGdt18vyv8cTi7YjYey5A7qFDc&isSsyAgentShareLink=1"
    },
    {
        name: "平安e生安·百万意外医疗险",
        desc: "0-65岁可投，意外医疗百万保障",
        price: 71.00,
        commission: "25%",
        link: "https://mcore.health.pingan.com/multi-pro/#/index?c=DLTGR&sc=427458A3ECD882809041BE70399D2030&g=AM000001158&post_id=unknown&open_id=oaaGdt18vyv8cTi7YjYey5A7qFDc&unionId=oQLyS54rYprF4TA_EP74cdmRTSxs&unionId=oQLyS54lXDafQSIA3klh7EPf4yAE&repost_id=0087a612-79dc-434f-9964-912d9ecf22a0&fromOpenId=oaaGdt18vyv8cTi7YjYey5A7qFDc&isSsyAgentShareLink=1"
    },
    {
        name: "平安e生安·老年百万意外险",
        desc: "最高80周岁可投，意外住院0免赔，社保内外100万保障限额",
        price: 558.34,
        commission: "25%",
        link: "https://mcore.health.pingan.com/pageflow/#/index?c=DLTGR&sc=427458A3ECD882809041BE70399D2030&g=AM000000969&post_id=unknown&open_id=oaaGdt18vyv8cTi7YjYey5A7qFDc&unionId=oQLyS54rYprF4TA_EP74cdmRTSxs&unionId=oQLyS54lXDafQSIA3klh7EPf4yAE&repost_id=6d19c3a4-c6c2-40e9-897a-739c2262941c&fromOpenId=oaaGdt18vyv8cTi7YjYey5A7qFDc&isSsyAgentShareLink=1"
    },
    {
        name: "安全保保险产品组合",
        desc: "28天至80周岁均可投保，保障多场景意外风险，给付限额最高50万元",
        price: 43.00,
        commission: "25%",
        link: "https://mcore.health.pingan.com/multi-pro/#/index?c=DLTGR&sc=427458A3ECD882809041BE70399D2030&g=AM000000406&post_id=unknown&open_id=oaaGdt18vyv8cTi7YjYey5A7qFDc&unionId=oQLyS54rYprF4TA_EP74cdmRTSxs&unionId=oQLyS54lXDafQSIA3klh7EPf4yAE&repost_id=3e58393d-7749-4573-b270-e7bcaf702f54&fromOpenId=oaaGdt18vyv8cTi7YjYey5A7qFDc&isSsyAgentShareLink=1"
    },
    {
        name: "平安e生保·抗癌医疗2022(普通版)",
        desc: "0-80岁可投，质量、特药双重责任升级",
        price: 175.00,
        commission: "15%",
        link: "https://mcore.health.pingan.com/pageflow/#/index?c=DLTGR&sc=427458A3ECD882809041BE70399D2030&g=AM000000105&post_id=unknown&open_id=oaaGdt18vyv8cTi7YjYey5A7qFDc&repost_id=37b66f94-b55e-4649-864b-e4d5933970f4&fromOpenId=oaaGdt18vyv8cTi7YjYey5A7qFDc&isSsyAgentShareLink=1&unionId=oQLyS54lXDafQSIA3klh7EPf4yAE"
    },
    {
        name: "平安e生保·抗癌医疗2022（特需版)",
        desc: "0-80岁可投，尊享公立医院特需部就医服务",
        price: 545.00,
        commission: "15%",
        link: "https://mcore.health.pingan.com/pageflow/#/index?c=DLTGR&sc=427458A3ECD882809041BE70399D2030&g=AM000000127&post_id=unknown&open_id=oaaGdt18vyv8cTi7YjYey5A7qFDc&repost_id=09263d97-52c8-4ac4-bda6-1a2935b7141b&fromOpenId=oaaGdt18vyv8cTi7YjYey5A7qFDc&isSsyAgentShareLink=1&unionId=oQLyS54lXDafQSIA3klh7EPf4yAE"
    }
];

// 检查登录状态
function checkLogin() {
    const loggedInPhone = localStorage.getItem("loggedInPhone");
    if (loggedInPhone && allowedPhones.includes(loggedInPhone)) {
        // 如果已登录，显示产品列表
        document.getElementById("productContainer").style.display = "block";
        initProducts();
    }
}

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
            // 保存登录状态
            localStorage.setItem("loggedInPhone", phone);
            // 显示产品列表
            document.getElementById("productContainer").style.display = "block";
            initProducts();
        } else {
            alert("该手机号无权限登录！");
        }
    } else {
        alert("请输入正确的手机号！");
    }
}

// 退出登录
function logout() {
    localStorage.removeItem("loggedInPhone"); // 清除登录状态
    alert("已退出登录！");
    // 隐藏产品列表
    document.getElementById("productContainer").style.display = "none";
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
    checkLogin(); // 检查登录状态
};
