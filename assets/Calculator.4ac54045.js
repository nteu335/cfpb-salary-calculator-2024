import{_ as P,u as I,j as s,a,b as T}from"./index.8a4c836b.js";var H=P({"node_modules/format-usd/lib/handle-string-input.js"(i,u){function e(r){var d=1,l=r.indexOf(r.match("-")),n=r.indexOf(r.match(/\d/));r.indexOf(r.match("-"))!==-1&&l<n&&(d=-1),r=r.replace(/[^0-9\.]+/g,"");function o(c,m,h){return m===h.indexOf(".")?".":""}return r=r.replace(/\./g,o),Number(r)*d}u.exports=e}}),O=P({"node_modules/format-usd/lib/comma-separate-number.js"(i,u){function e(r){var d=r.toString(),l=d.split("."),n=l[0].replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,");return typeof l[1]<"u"&&(n+="."+l[1]),n}u.exports=e}}),j=P({"node_modules/format-usd/index.js"(i,u){function e(r){var d=r.amount,l=0,n="",o=d,c="",m="",h=H(),b=O();return typeof d=="string"&&(o=h(d)),o<0&&(n="-"),r=r||{},l=Math.abs(r.decimalPlaces),isNaN(l)&&(l=2),c=Math.abs(o).toFixed(l),c=b(c),m=n+"$"+c,m}u.exports=e}});const y=j(),p=y.__esModule?y.default:y,f={2024:255e3,2025:255e3,2026:255e3},M={30:{2024:83489,2025:83489*1.02,2026:83489*1.02*1.02},31:{2024:70920,2025:70920*1.02,2026:70920*1.02*1.02},32:{2024:76949,2025:76949*1.02,2026:76949*1.02*1.02},33:{2024:83489,2025:83489*1.02,2026:83489*1.02*1.02},40:{2024:99082,2025:102600*1.02,2026:105011*1.02*1.02},41:{2024:81972,2025:81972*1.02,2026:81972*1.02*1.02},42:{2024:88940,2025:88940*1.02,2026:88940*1.02*1.02},43:{2024:96500,2025:96500*1.02,2026:96500*1.02*1.02},51:{2024:113903,2025:113903*1.02,2026:113903*1.02*1.02},52:{2024:129280,2025:129280*1.02,2026:129280*1.02*1.02},53:{2024:146732,2025:146732*1.02,2026:146732*1.02*1.02},60:{2024:192061,2025:192061*1.02,2026:192061*1.02*1.02},61:{2024:205505,2025:205505*1.02,2026:205505*1.02*1.02},71:{2024:216112,2025:216112*1.02,2026:216112*1.02*1.02},72:{2024:231240,2025:231240*1.02,2026:231240*1.02*1.02}},x={ZX:{name:"Rest of USA",2023:4.05,2024:4.37},AL:{name:"Albany",2023:12.15,2024:12.95},AK:{name:"Alaska",2023:7.35,2024:7.99},AQ:{name:"Albuquerque",2023:7.9,2024:8.32},AT:{name:"Atlanta",2023:10.38,2024:10.81},AU:{name:"Austin",2023:12.18,2024:12.77},BH:{name:"Birmingham",2023:8.12,2024:8.62},BO:{name:"Boston",2023:26.57,2024:27.49},BU:{name:"Buffalo",2023:10.06,2024:10.7},BN:{name:"Burlington",2023:11.98,2024:12.64},CT:{name:"Charlotte",2023:10.94,2024:11.57},CH:{name:"Chicago",2023:16.32,2024:16.94},CI:{name:"Cincinnati",2023:7.03,2024:7.37},CL:{name:"Cleveland",2023:7.63,2024:7.95},CS:{name:"Colorado Springs",2023:10.29,2024:10.91},CO:{name:"Columbus",2023:10.48,2024:11.01},CC:{name:"Corpus Christi",2023:8.43,2024:8.73},DA:{name:"Dallas",2023:15.79,2024:16.33},DV:{name:"Davenport",2023:9.26,2024:9.71},DG:{name:"Dayton",2023:10.68,2024:11.23},DN:{name:"Denver",2023:18.02,2024:18.85},DM:{name:"Des Moines",2023:8.53,2024:9.08},DT:{name:"Detroit",2023:16.12,2024:16.57},HB:{name:"Harrisburg",2023:9.57,2024:10.08},HA:{name:"Hartford",2023:15.2,2024:15.91},HI:{name:"Hawaii",2023:11.09,2024:11.71},HO:{name:"Houston",2023:18.69,2024:18.94},HU:{name:"Huntsville",2023:12.12,2024:12.64},IN:{name:"Indianapolis",2023:5.67,2024:5.99},KC:{name:"Kansas City",2023:8.82,2024:9.29},LR:{name:"Laredo",2023:12.28,2024:12.97},LV:{name:"Las Vegas",2023:10.8,2024:11.27},LA:{name:"Los Angeles",2023:28.32,2024:29.27},MI:{name:"Miami",2023:15.5,2024:15.78},ML:{name:"Milwaukee",2023:10.6,2024:11.01},MN:{name:"Minneapolis",2023:15.97,2024:16.73},NY:{name:"New York",2023:42.03,2024:43.11},OM:{name:"Omaha",2023:7.66,2024:8.08},PB:{name:"Palm Bay",2023:6.28,2024:6.58},PH:{name:"Philadelphia",2023:17.25,2024:17.96},PX:{name:"Phoenix",2023:10.75,2024:11.93},PI:{name:"Pittsburgh",2023:9.81,2024:10.22},PO:{name:"Portland",2023:12.79,2024:13.47},RA:{name:"Raleigh",2023:9.43,2024:9.96},RI:{name:"Richmond",2023:10.85,2024:11.38},SA:{name:"Sacramento",2023:16.98,2024:17.84},SO:{name:"San Antonio",2023:11.53,2024:12.02},SD:{name:"San Diego",2023:28.13,2024:29.17},SJ:{name:"San Jose",2023:42.87,2024:44.13},ST:{name:"Seattle",2023:23.46,2024:24.7},SL:{name:"Saint Louis",2023:10.49,2024:11.02},TU:{name:"Tucson",2023:8.7,2024:9.22},VB:{name:"Virginia Beach",2023:10.18,2024:10.7},WA:{name:"Washington, DC",2023:24.27,2024:25.04}};function q(i){return M[i]}function U(i){return x[i]}function V({band:i,base:u,locality:e="ZX"}){const r=Number(i),d=Number(u),l=U(e),n=f,o=q(r),c=o[2024],m=o[2025],h=o[2026],b=Math.min(d,c),g=Math.min(b*(1+l[2023]/100),f[2024]),N=Math.min(b*1.05,c),v=Math.min(N*(1+l[2023]/100),f[2024]),w=Math.min(N*1.048,m),C=Math.min(w*(1+l[2024]/100),f[2025]),S=Math.min(w*1.036,h),A=Math.min(S*(1+l[2024]/100),f[2026]),_=Math.round((l[2024]-l[2023])*100)/100,B=d*1.05*(_/100),D=g*.03+4e3,L=v*.02+3500,k=C*.02+3e3;return{band:r,base:d,localityName:l.name,locality2023:l[2023],locality2024:l[2024],locality2025:l[2024],localityDiff:_,localityLumpSum:B,salaryCaps:n,bandCaps:o,salary2023base:b,salary2023:p({amount:g,decimalPlaces:2}),salary2024base:N,salary2024:p({amount:v,decimalPlaces:2}),bonus2024:p({amount:D,decimalPlaces:2}),salary2025base:w,salary2025:p({amount:C,decimalPlaces:2}),bonus2025:p({amount:L,decimalPlaces:2}),salary2026base:S,salary2026:p({amount:A,decimalPlaces:2}),bonus2026:p({amount:k,decimalPlaces:2}),bandCap2024:c,bandCap2025:m,bandCap2026:h}}const $=""+new URL("../img/nteu-335-skull-logo.jpg",import.meta.url).href,t=y.__esModule?y.default:y,E=T.useState;function Y(){const[i,u]=I(),[e,r]=E({}),d=n=>{var c,m,h,b,g;n.preventDefault();const o={band:(c=i.get("band"))!=null?c:"30",base:(m=i.get("base"))!=null?m:"0",locality:(h=i.get("locality"))!=null?h:"ZX"};if(o.base=Number(o.base.replace(/\D/g,"")),o.base)(b=document.querySelector("#required-error"))==null||b.classList.add("hidden");else{(g=document.querySelector("#required-error"))==null||g.classList.remove("hidden"),r({});return}r(V(o))},l=n=>{const o={};for(const c of i.entries())["band","base","locality"].includes(c[0])&&(o[c[0]]=c[1]);n.target.name==="base"?o[n.target.name]=n.target.value.replace(/\D/g,""):o[n.target.name]=n.target.value,u(o)};return s("div",{className:"mx-auto mt-4 w-full p-4 md:mt-12 md:grid md:w-[68rem] md:max-w-full md:grid-cols-3",children:[s("div",{className:"md:col-span-1 md:mr-8",children:[a("h1",{className:"mb-6 text-3xl font-extrabold leading-none tracking-tight text-black",children:"CFPB Salary Calculator"}),a("p",{className:"mb-6",children:"NTEU and CFPB are currently negotiating a compensation agreement for years 2024, 2025 and 2026. Raises were due at the start of January, but CFPB still hasn\u2019t agreed to basic terms with our union on annual raises."}),a("h2",{className:"mb-6 text-2xl font-extrabold",children:"More content goes here"}),a("p",{className:"mb-6",children:"blah blah blah"}),a("h2",{className:"mb-6 text-2xl font-extrabold",children:"More content goes here"}),a("p",{className:"mb-6",children:"blah blah blah"}),a("h2",{className:"mb-6 text-2xl font-extrabold",children:"More content goes here"}),a("p",{className:"mb-6",children:"blah blah blah"})]}),s("div",{className:"md:col-span-2",children:[a("div",{className:"relative z-10 border border-gray-900 bg-white p-6 sm:rounded-md",children:s("form",{children:[a("h2",{className:"mb-3 text-xl font-extrabold",children:"Calculate your compensation under the proposal"}),s("label",{className:"mb-4 block",children:[a("span",{className:"text-gray-700",children:"Your current base salary*:"}),a("input",{name:"base",onChange:l,type:"text",defaultValue:i.get("base"),className:"mt-1 block w-full rounded-md border-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 md:w-1/2",placeholder:"0",required:!0}),a("span",{id:"required-error",className:"hidden font-bold text-rose-500",children:"Please provide a base salary."})]}),s("label",{className:"mb-4 block",children:[a("span",{className:"text-gray-700",children:"Your pay band:"}),a("select",{name:"band",id:"band",onChange:l,defaultValue:i.get("band"),className:" mt-1 block w-full rounded-md border-gray-900 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 md:w-1/2",children:Object.keys(M).map(n=>s("option",{value:n,children:["CN-",n]},n))})]}),s("label",{className:"mb-6 block",children:[a("span",{className:"text-gray-700",children:"Your locality (2023 rate / 2024 rate):"}),a("select",{name:"locality",id:"band",onChange:l,defaultValue:i.get("locality"),className:" mt-1 block w-full rounded-md border-gray-900 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 md:w-1/2",children:Object.keys(x).map(n=>s("option",{value:n,children:[x[n].name," (",x[n][2023],"% / ",x[n][2024],"%)"]},n))})]}),a("div",{children:a("button",{type:"submit",onClick:d,className:"focus:shadow-outline h-10 rounded-lg bg-indigo-700 px-5 text-white transition-colors duration-150 hover:bg-indigo-800 active:bg-violet-700",children:"Calculate"})}),s("p",{className:"mt-3 text-sm",children:["*Your base salary can be found in"," ",a("a",{href:"https://hrconnect.treasury.gov",target:"_blank",className:"underline",rel:"noreferrer",children:"HRConnect"}),"."]})]})}),s("div",{className:e.salary2024?"relative z-10 mt-6 border border-gray-900 bg-white p-6 sm:rounded-md":"hidden",children:[a("h2",{className:"mb-4 text-xl font-extrabold leading-none tracking-tight text-black",children:"Your compensation:"}),s("div",{className:"mb-4",children:[a("strong",{children:"2024:"})," ",s("span",{className:"has-tooltip underline decoration-dotted hover:decoration-solid",children:[s("span",{className:"tooltip -mt-32 -ml-20 w-max rounded border border-gray-900 bg-gray-100 p-2 text-sm shadow-lg",children:[t({amount:e.salary2023base,decimalPlaces:2})," ","base salary in 2023",a("br",{}),"+ 5% merit increase*",a("br",{}),"="," ",t({amount:e.salary2024base,decimalPlaces:2})," ","base salary",a("sup",{children:"#"})," for 2024",a("br",{}),"+ ",e.locality2023,"% locality rate for"," ",e.localityName," in 2023",a("br",{}),"="," ",a("span",{className:"bg-yellow-200",children:e.salary2024})," total salary",a("sup",{children:"\u2021"})," for 2024"]}),a("span",{className:"bg-yellow-200",children:e.salary2024})]})," ","salary +"," ",s("span",{className:"has-tooltip underline decoration-dotted hover:decoration-solid",children:[s("span",{className:"tooltip -mt-28 -ml-20 w-max rounded border border-gray-900 bg-gray-100 p-2 text-sm shadow-lg",children:[t({amount:e.salary2023,decimalPlaces:2})," ","total salary in 2023",a("br",{}),"x 3%",a("br",{}),"+ $4,000 (fixed amount)",a("br",{}),"="," ",t({amount:e.bonus2024,decimalPlaces:2})," ","one-time merit bonus"]}),t({amount:e.bonus2024,decimalPlaces:2})]})," ","merit"," ",s("span",{className:"whitespace-nowrap",children:["bonus* +"," ",s("span",{className:"has-tooltip underline decoration-dotted hover:decoration-solid",children:[s("span",{className:"tooltip -mt-28 -ml-20 w-max rounded border border-gray-900 bg-gray-100 p-2 text-sm shadow-lg",children:[t({amount:e.base,decimalPlaces:2})," base salary in 2023",a("br",{}),"+ 5% merit increase*",a("sup",{children:"#"}),a("br",{}),"x ",e.localityDiff,"% (diff between 2024 and 2023 rate)",a("br",{}),"="," ",t({amount:e.localityLumpSum,decimalPlaces:2})," ","lump sum (paid in three parts)",a("sup",{children:"\xB6"})]}),t({amount:e.localityLumpSum,decimalPlaces:2})]})]})," ","locality increase lump sum paid in three parts",a("sup",{children:"\xB6"})]}),s("div",{className:"mb-4",children:[a("strong",{children:"2025:"})," ",s("span",{className:"has-tooltip underline decoration-dotted hover:decoration-solid",children:[s("span",{className:"tooltip -mt-32 -ml-20 w-max rounded border border-gray-900 bg-gray-100 p-2 text-sm shadow-lg",children:[t({amount:e.salary2024base,decimalPlaces:2})," ","base salary in 2024",a("br",{}),"+ 4.8% merit increase",a("br",{}),"="," ",t({amount:e.salary2025base,decimalPlaces:2})," ","base salary",a("sup",{children:"#"})," for 2025",a("br",{}),"+ ",e.locality2024,"% estimated locality",a("sup",{children:"\u2020"})," ","for ",e.localityName," in 2025",a("br",{}),"="," ",a("span",{className:"bg-yellow-200",children:e.salary2025})," total salary",a("sup",{children:"\u2021"})," for 2025"]}),a("span",{className:"bg-yellow-200",children:e.salary2025})]})," ","salary +"," ",s("span",{className:"has-tooltip underline decoration-dotted hover:decoration-solid",children:[s("span",{className:"tooltip -mt-28 -ml-20 w-max rounded border border-gray-900 bg-gray-100 p-2 text-sm shadow-lg",children:[t({amount:e.salary2024,decimalPlaces:2})," ","total salary in 2024",a("br",{}),"x 2%",a("br",{}),"+ $3,500 (fixed amount)",a("br",{}),"="," ",t({amount:e.bonus2025,decimalPlaces:2})," ","one-time merit bonus"]}),t({amount:e.bonus2025,decimalPlaces:2})]})," ","merit bonus"]}),s("div",{className:"mb-4",children:[a("strong",{children:"2026:"})," ",s("span",{className:"has-tooltip underline decoration-dotted hover:decoration-solid",children:[s("span",{className:"tooltip -mt-32 -ml-20 w-max rounded border border-gray-900 bg-gray-100 p-2 text-sm shadow-lg",children:[t({amount:e.salary2025base,decimalPlaces:2})," ","base salary in 2025",a("br",{}),"+ 3.6% estimated merit increase",a("sup",{children:"\xA7"}),a("br",{}),"="," ",t({amount:e.salary2026base,decimalPlaces:2})," ","base salary",a("sup",{children:"#"})," for 2026",a("br",{}),"+ ",e.locality2025,"% estimated locality",a("sup",{children:"\u2020"})," ","for ",e.localityName," in 2026",a("br",{}),"="," ",a("span",{className:"bg-yellow-200",children:e.salary2026})," total salary",a("sup",{children:"\u2021"})," for 2026"]}),a("span",{className:"bg-yellow-200",children:e.salary2026})]})," ","salary +"," ",s("span",{className:"has-tooltip underline decoration-dotted hover:decoration-solid",children:[s("span",{className:"tooltip -mt-28 -ml-20 w-max rounded border border-gray-900 bg-gray-100 p-2 text-sm shadow-lg",children:[t({amount:e.salary2025,decimalPlaces:2})," ","total salary in 2025",a("br",{}),"x 2%",a("br",{}),"+ $3,000 (fixed amount)",a("br",{}),"="," ",t({amount:e.bonus2026,decimalPlaces:2})," ","one-time merit bonus"]}),t({amount:e.bonus2026,decimalPlaces:2})]})," ","merit bonus"]}),a("div",{className:"mb-4",children:"All employees will receive a $75 health insurance subsidy in 2024 ($85 in 2025 and 2026) per pay period. Employees with a total salary under $150,000 will receive a $1,000 annual health and wellness payment each year."}),a("h2",{className:"mb-4 text-xl font-extrabold leading-none tracking-tight text-black",children:"Notes:"}),s("div",{className:"mb-4",children:[a("strong",{children:"*2024 merit lump sums:"})," Both the 2024 merit increase and 2024 merit bonus will be paid as lump sums as soon as administratively feasible (within 4 months)."]}),s("div",{className:"mb-4",children:[s("strong",{children:[a("sup",{children:"#"}),"Pay band maximums:"]})," ","Your pay band (CN-",e.band,") has a maximum ",a("em",{children:"base"})," salary of"," ",t({amount:e.bandCap2024,decimalPlaces:2})," ","in 2024,"," ",t({amount:e.bandCap2025,decimalPlaces:2})," ","in 2025 and"," ",t({amount:e.bandCap2026,decimalPlaces:2})," ","in 2026. You will not receive merit increases once you reach this limit but you will still receive locality rate adjustments and merit bonuses."]}),s("p",{className:"mb-4",children:[s("strong",{children:[a("sup",{children:"\u2020"}),"Locality rates:"]})," ","2025 and 2026 locality rates will be based on yet-to-be-released GS locality rates for those years. The 2024 rate is used in the above calculations."]}),s("div",{className:"mb-4",children:[s("strong",{children:[a("sup",{children:"\u2021"}),"Salary cap:"]})," ","There is a ",a("em",{children:"total"})," salary cap of $255,000 across all pay bands that cannot be exceeded."]}),s("p",{className:"mb-4",children:[s("strong",{children:[a("sup",{children:"\xA7"}),"ECI:"]})," ","The 2026 merit increase will be equal to 2025's yet-to-be-released Employment Cost Index (ECI). For reference, 2023's ECI was 3.6%."]}),s("p",{className:"mb-4",children:[s("strong",{children:[a("sup",{children:"\xB6"}),"Locality increase lump sums:"]})," ","The 2024 locality rate will be paid in three lump sums over 2024. The first part will be paid as soon as administratively feasible, within 4 months of effective date. The second part will be paid in PP20 and the third in PP23."]})]})]}),a("img",{src:$,alt:"NTEU 335",className:"inset-x-1/4 z-0 mt-8 md:fixed md:bottom-6 md:right-6 md:left-[inherit] md:w-1/4"})]})}export{Y as default};