/* ═══ DATA ═══ */
const KEY='slcrm_v8';
function loadDB(){try{return JSON.parse(localStorage.getItem(KEY))||seed()}catch(e){return seed()}}
function save(){localStorage.setItem(KEY,JSON.stringify(DB))}
function uid(){return 'x'+(DB.seq++)+'_'+Date.now()}
function today(){return new Date().toISOString().slice(0,10)}
function fmt(d){return d?d.replace(/-/g,'.'):'—'}
function mon(d){return d?parseInt(d.slice(5,7)):0}
function fmtM(d){return d?d.slice(0,7):''}

function seed(){
  const res=['홍길동','김연구','이담당','박진아','최수현','정민서'];
  const branches=['서울지사','경기지사','인천지사','부산지사'];
  const regionMap={'서울지사':'서울','경기지사':'경기','인천지사':'인천','부산지사':'부산'};
  const grades=['A','A','B','B','B','C','C','C','D','D'];
  const instNames=['햇살','별빛','예쁜나라','초록숲','하늘빛','사랑가득','꿈나무','무지개','푸른하늘','행복한','따뜻한','아이사랑','미래','희망찬','새싹','동산','오색','자연','파랑새','달빛',
    '은하수','구름','산들바람','솔바람','연꽃','백합','장미','튤립','해바라기','민들레','이슬','풀잎','단풍','소나무','은행나무','버드나무','자작나무','느티나무','참나무','오동나무',
    '한울','두레','세모','네모','다솔','바른','가온','나래','도담','라온'];
  const instSuffix=['어린이집','유치원','어린이집','유치원','어린이집'];
  const dirNames=['김영숙','박미영','최영희','정수진','이하늘','박사랑','이미래','최은정','박소연','김지수','이서연','정다은','한미선','조현주','임수정','노지현','강다희','윤서진','허수빈','송다영'];
  const visitTypes=['교육','컨설팅','VOC 대응','영업','컨설팅'];
  const visitContents=[
    '신규 교사 대상 앱 기본 활용 교육. 반응 긍정적.','분기 정기 방문. 원장 면담 및 활용 현황 점검.',
    'VOC 현장 확인. 임시 해결책 안내 완료.','기관 맞춤 컨설팅 제공. 활용 포인트 2개 제안.',
    '교사 심화 교육. 앨범 제작 기능 실습.','이탈 방지 대응. 기술팀 연계 후 즉시 처리.',
    '신규 기관 첫 방문. 소개 및 시연 진행.','월간 정기 컨설팅. 데이터 기반 개선 방향 논의.',
    '거점원 역량 강화 교육. 사례 발표 연습.','학부모 공유 기능 설명. 원장 매우 긍정적 반응.'
  ];
  const vocContents=[
    '같은 사진이 반복되어 나와 개선 요청.','앱 로딩 속도가 느림.',
    '연령별 콘텐츠 분류 기능 요청.','인쇄 기능 레이아웃 깨지는 현상.',
    '활동지와 앱 내용 연계성 강화 요청.','UI가 복잡해서 교사들이 어려워함.',
    '사진 업로드 용량 제한 상향 요청.','자동 추천 기능 추가 요청.',
    '학부모 링크가 자주 만료됨.','영상 재생 속도 개선 요청.'
  ];
  const eduTopics=[
    '앱 기본 활용 교육 — 신규 교사 대상','연간 계획 수립 연계 전체 교사 교육',
    '앨범 제작 심화 교육','학부모 공유 기능 활용 교육',
    '거점원 역량 강화 사례 발표 연습','데이터 기록 관리 실습','모바일 앱 활용법 안내'
  ];
  const vocTypes=['기능 개선','오류','데이터 활용 관련','기타'];
  const vocStatuses=['미처리','검토중','처리완료','처리완료'];
  const vocResponses=['R&D팀 전달 완료.','개발팀 확인 중.','서버 최적화 완료.','','콘텐츠팀 전달.','기획팀 검토 예정.'];

  function rnd(arr){return arr[Math.floor(Math.random()*arr.length)];}
  function rndInt(a,b){return Math.floor(Math.random()*(b-a+1))+a;}
  function rndDate(y,m1,m2){const m=rndInt(m1,m2),d=rndInt(1,28);return`${y}-${String(m).padStart(2,'0')}-${String(d).padStart(2,'0')}`;}
  function tel(){return`010-${rndInt(1000,9999)}-${rndInt(1000,9999)}`;}
  function scoreFromGrade(g){const r={A:[4,5],B:[3,4],C:[2,3],D:[1,2]};const[lo,hi]=r[g];return Array.from({length:5},()=>rndInt(lo,hi));}

  const insts=[], visits=[], vocs=[], edus=[];
  let seq=1000;
  function uid(pfx){return pfx+(seq++)+'_v9';}

  // 6 original + 44 new = 50
  const fixed=[
    {id:'i1',name:'햇살어린이집',res:'홍길동',branch:'서울지사',region:'서울',yr:3,dir:'김영숙',tel:'010-1234-5678',hub:'N',grade:'A',scores:[5,4,5,4,4]},
    {id:'i2',name:'별빛유치원',res:'김연구',branch:'경기지사',region:'경기',yr:2,dir:'박미영',tel:'010-2345-6789',hub:'Y',grade:'A',scores:[4,5,4,4,4]},
    {id:'i3',name:'예쁜나라유치원',res:'이담당',branch:'서울지사',region:'서울',yr:1,dir:'최영희',tel:'010-3456-7890',hub:'N',grade:'C',scores:[2,3,2,3,2]},
    {id:'i4',name:'초록숲어린이집',res:'홍길동',branch:'경기지사',region:'경기',yr:1,dir:'정수진',tel:'010-4567-8901',hub:'N',grade:'D',scores:[1,2,2,1,2]},
    {id:'i5',name:'하늘빛유치원',res:'김연구',branch:'서울지사',region:'인천',yr:2,dir:'이하늘',tel:'010-5678-9012',hub:'Y',grade:'B',scores:[3,4,3,4,3]},
    {id:'i6',name:'사랑가득어린이집',res:'이담당',branch:'부산지사',region:'부산',yr:3,dir:'박사랑',tel:'010-6789-0123',hub:'Y',grade:'B',scores:[3,3,4,3,3]},
  ];

  // candidates for dashboard: A grade, hub='N', need edus
  // i1 will have edu & voc<=2 so it shows in candidates
  fixed.forEach((fi,i)=>{
    const gh=[{date:'2025-03-01',grade:fi.grade,score:fi.scores.reduce((a,b)=>a+b,0),note:'초기 평가'}];
    const out=[{date:'2025-05-01',dl:rndInt(50,250),case:'활용 사례 기록.',idea:'추가 아이디어.',best:fi.grade==='A',file:''}];
    insts.push({...fi,addr:`${fi.region} 주소 예시`,ages:['3','4','5'],feat:`${fi.name}의 기관 특징입니다.`,gradeHistory:gh,out});
    // visits
    for(let v=0;v<rndInt(1,3);v++){
      const d=rndDate(2025,1,6);
      visits.push({id:uid('v'),iid:fi.id,date:d,type:rnd(visitTypes),content:rnd(visitContents)});
    }
    // vocs (i1 gets 1, others more)
    const vcCnt=fi.id==='i1'?1:rndInt(1,3);
    for(let v=0;v<vcCnt;v++){
      vocs.push({id:uid('vc'),iid:fi.id,date:rndDate(2025,2,6),type:rnd(vocTypes),content:rnd(vocContents),response:rnd(vocResponses),status:rnd(vocStatuses)});
    }
    // edus (i1 gets edu so it appears in candidate)
    edus.push({id:uid('e'),iid:fi.id,date:rndDate(2025,3,6),type:rnd(['대면','비대면']),topic:rnd(eduTopics)});
  });

  // Generate 44 more
  for(let n=7;n<=50;n++){
    const br=rnd(branches);
    const gr=rnd(grades);
    const isHub=rndInt(0,3)===0?'Y':'N';
    const yr=rndInt(1,4);
    const instName=instNames[n-1]+rnd(instSuffix);
    const id='i'+n;
    const sc=scoreFromGrade(gr);
    const gh=[{date:rndDate(2025,1,4),grade:gr,score:sc.reduce((a,b)=>a+b,0),note:'정기 평가'}];
    const outList=[{date:rndDate(2025,2,6),dl:rndInt(10,300),case:'활용 사례.',idea:'아이디어.',best:gr==='A',file:''}];
    insts.push({
      id,name:instName,res:rnd(res),branch:br,region:regionMap[br],
      addr:`${regionMap[br]} 주소 ${n}`,yr,dir:rnd(dirNames),tel:tel(),
      ages:['3','4','5'],feat:`${instName}의 기관 특징. ${yr}년차 기관으로 ${gr}등급 운영 중.`,
      hub:isHub,grade:gr,scores:sc,gradeHistory:gh,out:outList
    });
    // visits (1~3)
    for(let v=0;v<rndInt(1,3);v++)
      visits.push({id:uid('v'),iid:id,date:rndDate(2025,1,6),type:rnd(visitTypes),content:rnd(visitContents)});
    // vocs (0~4)
    const vcMax={A:1,B:2,C:4,D:6}[gr];
    for(let v=0;v<rndInt(0,vcMax);v++)
      vocs.push({id:uid('vc'),iid:id,date:rndDate(2025,1,6),type:rnd(vocTypes),content:rnd(vocContents),response:rnd(vocResponses),status:rnd(vocStatuses)});
    // edus (0~2)
    for(let v=0;v<rndInt(0,2);v++)
      edus.push({id:uid('e'),iid:id,date:rndDate(2025,2,6),type:rnd(['대면','비대면']),topic:rnd(eduTopics)});
  }

  return{seq,insts,visits,vocs,edus};
}


let DB=loadDB();
let CUR='';
let VOC_FILTER_IID=null;
let IMP_ONLY=false;
let INST_P=1; const IPP=15;
let VOC_P=1; const VPP=15;
let HUB_P=1;
let DRILL={level:'months',month:null,iid:null};
let HUB_SCORES=[3,3,3,3,3];

/* CHECKLIST ITEMS (방문 체크리스트 5항목) */
const CL_ITEMS=[
  {label:'원장님의 프로그램 도입 의지 및 활용 관심도',desc:'원장의 적극적 관심, 회의 참여, 피드백 제공 여부'},
  {label:'교사들의 데이터 기록 및 관리의 성실도',desc:'일상적 기록 유지, 데이터 입력 성실성'},
  {label:'학부모의 시스템 접속 및 피드백 활성화 정도',desc:'앱 접속 빈도, 학부모 반응 및 참여도'},
  {label:'거점원 방문 시 협조 및 개선 의지',desc:'방문 시 적극적 참여, 개선사항 반영 의지'},
  {label:'전년 대비 시스템 활용 지표의 성장세',desc:'다운로드 수, 활용 빈도, 기록 데이터 증가 추이'},
];

/* HELPERS */
const gradeColor={A:'#16A34A',B:'#2563EB',C:'#D97706',D:'#DC2626'};
const gradeBg={A:'rgba(22,163,74,.1)',B:'rgba(37,99,235,.1)',C:'rgba(217,119,6,.1)',D:'rgba(220,38,38,.1)'};
const gradeLabel={A:'A 고활용',B:'B 안정운영',C:'C 활용지원',D:'D 집중대응'};
const gradeBanner={
  A:'✅ A 고활용 기관 — 거점원 발굴 및 사례 기록에 집중하세요.',
  B:'📊 B 안정운영 기관 — 이해도 향상 컨설팅 및 상위 전환 관리가 필요합니다.',
  C:'⚠️ C 활용지원 기관 — 월 1회 이상 방문하고 이탈 방지에 집중하세요.',
  D:'🚨 D 집중대응 기관 — 즉각 대응, 집중 모니터링이 필요합니다.',
};

function calcGrade(scores){
  const t=(scores||[3,3,3,3,3]).reduce((a,b)=>a+b,0);
  if(t>=21)return'A';if(t>=16)return'B';if(t>=11)return'C';return'D';
}
function calcTotal(scores){return(scores||[3,3,3,3,3]).reduce((a,b)=>a+b,0);}

function gpHtml(g,iid){
  if(!g)return`<span class="gp gN" style="cursor:default">—</span>`;
  if(iid)return`<span class="gp g${g}" title="${gradeLabel[g]} — 클릭시 이력" onclick="showGradeHistory('${iid}',event)">${g}</span>`;
  return`<span class="gp g${g}" title="${gradeLabel[g]}">${g}</span>`;
}
function vocTypeBadge(t){
  const m={'기능 개선':'bp','오류':'br','데이터 활용 관련':'bb','기타':'bn','활용성':'bb'};
  return`<span class="badge ${m[t]||'bn'}">${t}</span>`;
}
function statusBadge(s){const m={미처리:'br',검토중:'ba',처리완료:'bg'};return`<span class="badge ${m[s]||'bn'}">${s}</span>`;}
function vtBadge(t){
  const m={교육:'bb',영업:'bg','VOC 대응':'ba',컨설팅:'bp',관리:'bp',기타:'bn'};
  return`<span class="badge ${m[t]||'bn'}" style="font-size:10px">${t}</span>`;
}

/* NAV */
function nav(page,btn){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const pg=document.getElementById('page-'+page);if(pg)pg.classList.add('active');
  document.querySelectorAll('.ni').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
  if(page==='dashboard'){renderDash();updateAlertBadge();}
  if(page==='inst')renderInst();
  if(page==='voc')renderVoc();
  if(page==='hubs')renderHubs();
  if(page==='calendar')renderCal();
  if(page==='report')renderReport();
  if(page==='collab'){/* static page */}
}
function switchManTab(btn,id){
  document.querySelectorAll('.man-tab').forEach(t=>t.classList.remove('active'));btn.classList.add('active');
  document.querySelectorAll('.man-pane').forEach(p=>p.classList.remove('active'));document.getElementById(id).classList.add('active');
}

/* DASHBOARD */
function renderDash(){
  const now=new Date();
  document.getElementById('dash-date').textContent=now.toLocaleDateString('ko-KR',{year:'numeric',month:'long',day:'numeric',weekday:'short'});
  const insts=DB.insts,vocs=DB.vocs,edus=DB.edus;
  const pend=vocs.filter(v=>v.status==='미처리').length;
  const pb=document.getElementById('voc-pending-badge');pb.textContent=pend;pb.style.display=pend>0?'':'none';
  const monVoc=vocs.filter(v=>mon(v.date)===now.getMonth()+1).length;
  const eduSet=new Set(edus.map(e=>e.iid)).size;

  document.getElementById('dash-stats').innerHTML=`
    <div class="sc clickable" style="border-top:3px solid var(--ac)" onclick="nav('inst',document.querySelectorAll('.ni')[1])">
      <div class="sc-icon">🏫</div><div class="sc-lb">전체 기관 수</div>
      <div class="sc-v c-ac">${insts.length}</div>
      <div class="sc-s">A<span class="trend t-up" style="margin:0 3px">${insts.filter(i=>i.grade==='A').length}</span>B<span class="trend t-up" style="margin:0 3px">${insts.filter(i=>i.grade==='B').length}</span>C<span class="trend" style="background:var(--amb);color:var(--am);margin:0 3px">${insts.filter(i=>i.grade==='C').length}</span>D<span class="trend t-dn" style="margin:0 3px">${insts.filter(i=>i.grade==='D').length}</span></div>
    </div>
    <div class="sc clickable" style="border-top:3px solid var(--am)" onclick="nav('voc',document.querySelectorAll('.ni')[2])">
      <div class="sc-icon">💬</div><div class="sc-lb">이달 VOC 누적</div>
      <div class="sc-v c-am">${monVoc}</div>
      <div class="sc-s">미처리 <span class="trend t-dn">${pend}</span> · 전체 ${vocs.length}건</div>
    </div>
    <div class="sc" style="border-top:3px solid var(--pp);cursor:pointer" onclick="openSov('sov-edu-rates')">
      <div class="sc-icon">📚</div><div class="sc-lb">교육 완료율</div>
      <div class="sc-v c-pp">${Math.round(eduSet/Math.max(insts.length,1)*100)}%</div>
      <div class="sc-s">${eduSet}개 기관 1개 이상 완료 · 클릭시 상세</div>
    </div>`;
  // Render edu rates SOV content
  renderEduRatesPanel();

  // Grade chart
  const gc={A:0,B:0,C:0,D:0};
  insts.forEach(i=>{if(i.grade&&gc[i.grade]!==undefined)gc[i.grade]++;});
  const totI=Math.max(insts.length,1);
  document.getElementById('dash-grade-chart').innerHTML=['A','B','C','D'].map(g=>{
    const c=gc[g],p=Math.round(c/totI*100);
    const col={A:'var(--g)',B:'var(--bl)',C:'var(--am)',D:'var(--rd)'}[g];
    return`<div class="bcr"><div class="bcr-l"><span style="font-weight:700;color:${col}">${gradeLabel[g]}</span><span>${c}개 (${p}%)</span></div><div class="bcr-t"><div class="bcr-f" style="width:${p}%;background:${col}"></div></div></div>`;
  }).join('');

  // VOC dist
  const types=['기능 개선','오류','데이터 활용 관련','기타'];
  const colors=['var(--pp)','var(--rd)','var(--bl)','var(--tx3)'];
  const tot=Math.max(vocs.length,1);
  document.getElementById('dash-voc-dist').innerHTML=types.map((t,i)=>{
    const c=vocs.filter(v=>v.type===t||v.type==='활용성'&&t==='데이터 활용 관련').length,p=Math.round(c/tot*100);
    return`<div class="bcr"><div class="bcr-l"><span>${t}</span><span>${c}건 (${p}%)</span></div><div class="bcr-t"><div class="bcr-f" style="width:${p}%;background:${colors[i]}"></div></div></div>`;
  }).join('');

  // Monthly
  const mc=new Array(12).fill(0);
  vocs.forEach(v=>{const m=mon(v.date);if(m>=1&&m<=12)mc[m-1]++;});
  const mx=Math.max(...mc,1);const curM=now.getMonth();
  document.getElementById('dash-monthly').innerHTML=`<div class="mc">${['1','2','3','4','5','6','7','8','9','10','11','12'].map((m,i)=>{
    const h=Math.max(Math.round(mc[i]/mx*64),4),isc=i===curM;
    return`<div class="mcc"><div class="mcb" style="height:${h}px;background:${isc?'var(--ac)':'var(--bd2)'}" onclick="goVocPage(null,${i+1})" title="${m}월 ${mc[i]}건"></div><div class="mcl" style="color:${isc?'var(--ac)':'var(--tx3)'}">${m}</div></div>`;
  }).join('')}</div>`;

  // Candidates
  // Candidates: A grade, ≤2 VOC, has edu, not hub
  let cands=insts.filter(i=>{const vc=vocs.filter(v=>v.iid===i.id).length;const ed=edus.find(e=>e.iid===i.id);return i.grade==='A'&&vc<=2&&ed&&i.hub!=='Y';});
  // Also include B-grade with strong record if fewer than 3 candidates
  if(cands.length<3){const extra=insts.filter(i=>{const vc=vocs.filter(v=>v.iid===i.id).length;const ed=edus.find(e=>e.iid===i.id);return i.grade==='B'&&vc<=1&&ed&&i.hub!=='Y'&&!cands.find(c=>c.id===i.id);});cands=[...cands,...extra].slice(0,5);}
  updateAlertBadge();
  const cel=document.getElementById('dash-cands');
  cel.innerHTML=cands.length?cands.map(i=>{const vc=vocs.filter(v=>v.iid===i.id).length;const ed=edus.find(e=>e.iid===i.id);return`<tr><td><span class="tl" onclick="openModal('${i.id}')">${i.name}</span></td><td>${i.region}</td><td>${gpHtml(i.grade)}</td><td>${vc}</td><td>${ed?'✅':'❌'}</td><td><span class="badge bg">추천</span></td></tr>`;}).join(''):`<tr><td colspan="6"><div class="empty">후보 기관 없음</div></td></tr>`;
}

function goVocPage(iid,month){
  VOC_FILTER_IID=iid||null;
  if(month)DRILL={level:'insts',month,iid:null};
  else if(iid)DRILL={level:'detail_all',month:null,iid};
  else DRILL={level:'months',month:null,iid:null};
  nav('voc',document.querySelectorAll('.ni')[2]);
}

/* INSTITUTIONS */
function filteredInsts(){
  const q=(document.getElementById('fi-q')?.value||'').toLowerCase();
  const reg=document.getElementById('fi-region')?.value||'';
  const br=document.getElementById('fi-branch')?.value||'';
  const res=document.getElementById('fi-res')?.value||'';
  const gr=document.getElementById('fi-grade')?.value||'';
  return DB.insts.filter(i=>{
    if(q&&!i.name.toLowerCase().includes(q)&&!i.dir.toLowerCase().includes(q))return false;
    if(reg&&i.region!==reg)return false;
    if(br&&i.branch!==br)return false;
    if(res&&i.res!==res)return false;
    if(gr&&i.grade!==gr)return false;
    return true;
  });
}

function renderInst(){
  const resEl=document.getElementById('fi-res');
  const curRes=resEl?resEl.value:'';
  const resList=[...new Set(DB.insts.map(i=>i.res))].sort();
  if(resEl)resEl.innerHTML='<option value="">담당연구원 전체</option>'+resList.map(r=>`<option${r===curRes?' selected':''}>${r}</option>`).join('');

  const all=filteredInsts();
  const total=all.length,pages=Math.max(1,Math.ceil(total/IPP));
  if(INST_P>pages)INST_P=1;
  const slice=all.slice((INST_P-1)*IPP,INST_P*IPP);
  const tbody=document.getElementById('inst-tbody');
  tbody.innerHTML=slice.length?slice.map(i=>{
    const vc=DB.vocs.filter(v=>v.iid===i.id).length;
    const edCnt=DB.edus.filter(e=>e.iid===i.id).length;
    const vs=DB.visits.filter(v=>v.iid===i.id).sort((a,b)=>b.date.localeCompare(a.date));
    const lv=vs.length?fmt(vs[0].date):'—';
    const hubHtml=i.hub==='Y'?`<span class="badge bg">Y</span>`:`<span class="badge bn">N</span>`;
    const dirHtml=`<div class="dir-wrap"><button class="dir-btn" onclick="toggleDirDrop(event,'dd_${i.id}')">${i.dir} ▾</button><div class="dir-drop" id="dd_${i.id}"><div class="dir-drop-name">${i.dir} 원장</div><div class="dir-drop-tel">📞 ${i.tel||'—'}</div><button class="dir-drop-copy" onclick="copyTel('${i.tel||''}','dd_${i.id}')">번호 복사</button></div></div>`;
    return`<tr>
      <td><span class="tl" onclick="openModal('${i.id}')">${i.name}</span></td>
      <td>${gpHtml(i.grade,i.id)}</td>
      <td>${i.region}</td><td style="font-size:11px;color:var(--tx3)">${i.branch}</td>
      <td>${i.res}</td><td>${dirHtml}</td>
      <td>${hubHtml}</td><td>${i.yr}년차</td>
      <td><span class="tl" onclick="openModal('${i.id}');setTimeout(()=>{switchMT(document.getElementById('mt-edu-tab'),'mt-edu')},100)">${edCnt}</span></td>
      <td><span class="tl" style="color:${vc>=4?'var(--rd)':vc>=2?'var(--am)':'var(--bl)'}" onclick="openModal('${i.id}');setTimeout(()=>{const t=document.querySelector('.mt[onclick*=mt-voc]');if(t)t.click();},120)">${vc}</span></td>
      <td style="font-size:11px;color:var(--tx3)">${lv}</td>
      <td style="display:flex;gap:4px">
        <button class="btn btn-xs btn-g" onclick="openModal('${i.id}')">상세</button>
        <button class="btn btn-xs btn-d" onclick="confirmDel('${i.id}')">삭제</button>
      </td>
    </tr>`;
  }).join(''):`<tr><td colspan="12"><div class="empty">조건에 맞는 기관이 없습니다</div></td></tr>`;
  document.getElementById('inst-pi').textContent=`총 ${total}개`;
  renderPager('inst-pb',INST_P,pages,p=>{INST_P=p;renderInst()});
}

/* MODAL */
function openModal(id,tabId){
  CUR=id;
  const i=DB.insts.find(x=>x.id===id);if(!i)return;
  const g=i.grade||'';
  document.getElementById('m-name').textContent=i.name;
  document.getElementById('m-sub').textContent=`${i.region} · ${i.branch} · 담당: ${i.res}`;
  document.getElementById('m-grade-badge').innerHTML=g?`<span class="badge" style="background:${gradeBg[g]};color:${gradeColor[g]}">${gradeLabel[g]}</span>`:'';
  document.getElementById('m-grade-banner').innerHTML=g?`<div class="rb rb-${g}">${gradeBanner[g]}</div>`:'';
  document.getElementById('m-basic-grid').innerHTML=`
    <div class="ic"><div class="ik">원장명</div><div class="iv">${i.dir}</div></div>
    <div class="ic"><div class="ik">원장 전화</div><div class="iv">${i.tel}</div></div>
    <div class="ic"><div class="ik">관할 지사</div><div class="iv">${i.branch}</div></div>
    <div class="ic"><div class="ik">연차</div><div class="iv">${i.yr}년차</div></div>
    <div class="ic"><div class="ik">관리 등급</div><div class="iv">${gpHtml(g)} ${gradeLabel[g]||'미분류'}</div></div>
    <div class="ic"><div class="ik">거점원 여부</div><div class="iv">${i.hub==='Y'?'Y (거점원)':'N (비거점원)'}</div></div>
    <div class="ic full"><div class="ik">주소</div><div class="iv">${i.addr}</div></div>`;
  document.getElementById('m-feat').textContent=i.feat||'(특징 정보 없음)';

  renderMVisits();renderMConsultOnly();renderMCriteria();renderMVoc();renderMEdu();renderMOutput();

  document.querySelectorAll('.mt').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.tp').forEach(p=>p.classList.remove('active'));
  const firstTab=document.querySelectorAll('.mt')[0];firstTab.classList.add('active');
  document.getElementById('mt-basic').classList.add('active');
  document.getElementById('inst-modal').classList.add('open');

  if(tabId){setTimeout(()=>{const tb=document.getElementById(tabId+'-tab')||document.querySelector(`[onclick*="${tabId}"]`);if(tb)tb.click();},100);}
}
function closeInstModal(){document.getElementById('inst-modal').classList.remove('open')}
function switchMT(btn,id){
  document.querySelectorAll('.mt').forEach(t=>t.classList.remove('active'));btn.classList.add('active');
  document.querySelectorAll('.tp').forEach(p=>p.classList.remove('active'));document.getElementById(id).classList.add('active');
  if(id==='mt-consult-tab')renderMConsultOnly();
}

/* VISITS (통합: visits + consults) */
function renderMVisits(){
  const vs=DB.visits.filter(v=>v.iid===CUR);
  const all=vs.sort((a,b)=>b.date.localeCompare(a.date));
  const el=document.getElementById('m-visits');
  if(!all.length){el.innerHTML=`<div class="empty">기록이 없습니다</div>`;return;}
  el.innerHTML=all.map((v,i)=>`
    <div class="tl-item">
      <div class="tl-g"><div class="tl-dot ${v.type==='컨설팅'||v.type==='관리'?'tl-dot-c':''}"></div>${i<all.length-1?'<div class="tl-line"></div>':''}</div>
      <div class="tl-b">
        <div class="tl-m">${vtBadge(v.type)}<span>${fmt(v.date)}</span></div>
        <div class="tl-tx">${v.content}</div>
        <button class="btn btn-xs btn-d" style="margin-top:6px" onclick="delVisit('${v.id}')">삭제</button>
      </div>
    </div>`).join('');
}
function openAddVisit(){document.getElementById('vi-date').value=today();document.getElementById('vi-content').value='';openSov('sov-visit')}
function saveVisit(){
  const d=document.getElementById('vi-date').value,c=document.getElementById('vi-content').value.trim();
  if(!d||!c){toast('날짜와 내용을 입력해주세요','error');return}
  DB.visits.push({id:uid(),iid:CUR,date:d,type:document.getElementById('vi-type').value,content:c});
  save();closeSov('sov-visit');renderMVisits();toast('방문 기록 저장','success');
}
function delVisit(id){DB.visits=DB.visits.filter(v=>v.id!==id);save();renderMVisits();}
function openAddConsult(){document.getElementById('co-date').value=today();document.getElementById('co-content').value='';document.getElementById('co-response').value='';openSov('sov-consult')}
function saveConsult(){
  const c=document.getElementById('co-content').value.trim();
  if(!c){toast('내용을 입력해주세요','error');return}
  const resp=document.getElementById('co-response').value.trim();
  const fullContent=c+(resp?'\n본사 대응: '+resp:'');
  DB.visits.push({id:uid(),iid:CUR,date:document.getElementById('co-date').value,type:'컨설팅',content:fullContent});
  save();closeSov('sov-consult');renderMVisits();toast('컨설팅 기록 저장','success');
}

/* CRITERIA (체크리스트) */
function renderMCriteria(){
  const inst=DB.insts.find(x=>x.id===CUR);if(!inst)return;
  const scores=inst.scores||[3,3,3,3,3];
  const total=calcTotal(scores);
  const grade=calcGrade(scores);
  const el=document.getElementById('m-criteria-content');
  el.innerHTML=`
    ${CL_ITEMS.map((item,idx)=>`
      <div class="score-row">
        <div class="score-row-title">${idx+1}. ${item.label}</div>
        <div class="score-row-desc">${item.desc}</div>
        <div class="score-btns">
          ${[1,2,3,4,5].map(v=>`<button class="sbtn s${v}${scores[idx]===v?' active':''}" onclick="setCrScore(${idx},${v})" id="cr_${idx}_${v}">${v}</button>`).join('')}
          <span style="font-size:11px;color:var(--tx3);margin-left:6px" id="cr_label_${idx}">${scores[idx]}점</span>
        </div>
      </div>`).join('')}
    <div class="score-display">
      <div><div style="font-size:11px;color:var(--tx3);margin-bottom:4px">합산 점수</div><div class="score-num" id="cr-total" style="color:${gradeColor[grade]}">${total}점</div></div>
      <div style="text-align:right"><div style="font-size:11px;color:var(--tx3);margin-bottom:4px">산출 등급</div><div class="score-grade" id="cr-grade" style="color:${gradeColor[grade]}">${grade} — ${gradeLabel[grade]}</div><div style="font-size:10px;color:var(--tx3);margin-top:2px">A:21~25 / B:16~20 / C:11~15 / D:10이하</div></div>
    </div>
    <button class="btn btn-p" style="width:100%;margin-top:12px;justify-content:center" onclick="saveCriteriaScore()">✅ 저장 및 등급 반영</button>
    <div style="margin-top:18px;border-top:1px solid var(--bd);padding-top:14px">
      <div style="font-size:11px;font-weight:700;color:var(--tx3);text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px">등급 변동 이력</div>
      ${renderGradeHistHTML(inst)}
    </div>`;
}
function setCrScore(idx,val){
  const inst=DB.insts.find(x=>x.id===CUR);if(!inst)return;
  if(!inst.scores)inst.scores=[3,3,3,3,3];
  inst.scores[idx]=val;
  // update buttons
  [1,2,3,4,5].forEach(v=>{
    const btn=document.getElementById(`cr_${idx}_${v}`);
    if(!btn)return;
    btn.className=`sbtn s${v}${v===val?' active':''}`;
  });
  const lbl=document.getElementById(`cr_label_${idx}`);if(lbl)lbl.textContent=val+'점';
  const total=calcTotal(inst.scores);
  const grade=calcGrade(inst.scores);
  const te=document.getElementById('cr-total');if(te){te.textContent=total+'점';te.style.color=gradeColor[grade];}
  const ge=document.getElementById('cr-grade');if(ge){ge.textContent=grade+' — '+gradeLabel[grade];ge.style.color=gradeColor[grade];}
}
function saveCriteriaScore(){
  const inst=DB.insts.find(x=>x.id===CUR);if(!inst)return;
  const total=calcTotal(inst.scores||[3,3,3,3,3]);
  const newGrade=calcGrade(inst.scores||[3,3,3,3,3]);
  const prev=inst.grade;
  inst.grade=newGrade;
  if(!inst.gradeHistory)inst.gradeHistory=[];
  inst.gradeHistory.push({date:today(),grade:newGrade,score:total,note:'체크리스트 평가'});
  DB.visits.push({id:uid(),iid:CUR,date:today(),type:'컨설팅',content:`[등급 평가] 총점 ${total}점 → ${gradeLabel[newGrade]} 등급\n${CL_ITEMS.map((cl,i)=>`${cl.label}: ${(inst.scores||[])[i]||3}점`).join(', ')}`});
  save();renderInst();renderMCriteria();
  toast(`${inst.name}: ${prev||'미분류'} → ${newGrade} (${total}점)`,'success');
}
function renderGradeHistHTML(inst){
  const hist=(inst.gradeHistory||[]).slice().reverse();
  if(!hist.length)return`<div style="font-size:12px;color:var(--tx3)">이력 없음</div>`;
  return hist.map(h=>`<div style="display:flex;gap:10px;align-items:center;padding:7px 0;border-bottom:1px solid var(--bd);font-size:12px"><span style="color:var(--tx3);white-space:nowrap">${fmt(h.date)}</span>${gpHtml(h.grade)}<span style="color:var(--tx2)">${h.score}점</span><span style="color:var(--tx3)">${h.note||''}</span></div>`).join('');
}
function showGradeHistory(iid,event){
  if(event)event.stopPropagation();
  const inst=DB.insts.find(i=>i.id===iid);if(!inst)return;
  document.querySelectorAll('.ghp').forEach(e=>e.remove());
  const hist=(inst.gradeHistory||[]).slice().reverse();
  const popup=document.createElement('div');popup.className='ghp';
  popup.style.cssText=`position:fixed;z-index:400;background:var(--sf);border:1px solid var(--bd2);border-radius:var(--rl);padding:16px;min-width:280px;box-shadow:var(--shadow-lg);`;
  if(event){popup.style.left=Math.min(event.clientX+8,window.innerWidth-300)+'px';popup.style.top=(event.clientY-20)+'px';}
  popup.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px"><div style="font-size:13px;font-weight:700">${inst.name} 등급 이력</div><button onclick="this.parentElement.parentElement.remove()" style="color:var(--tx3);font-size:18px;cursor:pointer;background:none;border:none">×</button></div>${hist.length?hist.map(h=>`<div style="display:flex;gap:9px;align-items:center;padding:7px 0;border-bottom:1px solid var(--bd);font-size:12px"><span style="color:var(--tx3);white-space:nowrap">${fmt(h.date)}</span>${gpHtml(h.grade)}<span style="color:var(--tx2)">${h.score}점</span><span style="color:var(--tx3)">${h.note||''}</span></div>`).join(''):'<div style="color:var(--tx3);font-size:12px">이력 없음</div>'}`;
  document.body.appendChild(popup);
  setTimeout(()=>document.addEventListener('click',function once(e){if(!popup.contains(e.target)){popup.remove();document.removeEventListener('click',once);}},true),100);
}

/* VOC MODAL */
function renderMVoc(){
  const vocs=DB.vocs.filter(v=>v.iid===CUR).sort((a,b)=>b.date.localeCompare(a.date));
  document.getElementById('m-voc-title').textContent=`VOC 내역 (총 ${vocs.length}건)`;
  document.getElementById('m-voc-tbody').innerHTML=vocs.length?vocs.map(v=>`<tr>
    <td style="font-size:11px;color:var(--tx3);white-space:nowrap">${fmt(v.date)}</td>
    <td>${vocTypeBadge(v.type)}</td>
    <td style="font-size:12px;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--tx2)" title="${v.content}">${v.content}</td>
    <td style="font-size:11px;color:var(--tx3);max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${v.response||''}">${v.response||'—'}</td>
    <td>${statusBadge(v.status)}</td>
    <td><button class="btn btn-xs btn-d" onclick="delVocM('${v.id}')">삭제</button></td>
  </tr>`).join(''):`<tr><td colspan="6"><div class="empty">VOC 없음</div></td></tr>`;
}
function delVocM(id){DB.vocs=DB.vocs.filter(v=>v.id!==id);save();renderMVoc();renderDash();}

/* EDU */
function renderMEdu(){
  const es=DB.edus.filter(e=>e.iid===CUR).sort((a,b)=>b.date.localeCompare(a.date));
  const el=document.getElementById('m-edu-list');
  if(!es.length){el.innerHTML=`<div class="empty">교육 기록이 없습니다</div>`;return;}
  el.innerHTML=es.map(e=>`
    <div class="edu-card">
      <div style="display:flex;gap:7px;align-items:center;margin-bottom:6px">
        <span class="badge bb" style="font-size:10px">${e.type}</span>
        <span style="font-size:11px;color:var(--tx3)">${fmt(e.date)}</span>
      </div>
      <div style="font-size:13px;color:var(--tx2);line-height:1.6;font-weight:500">${e.topic||e.content||'—'}</div>
      <button class="btn btn-xs btn-d" style="margin-top:7px" onclick="delEdu('${e.id}')">삭제</button>
    </div>`).join('');
}
function openAddEdu(){document.getElementById('edu-date').value=today();document.getElementById('edu-topic').value='';openSov('sov-edu')}
function saveEdu(){
  const d=document.getElementById('edu-date').value,t=document.getElementById('edu-topic').value.trim();
  if(!d||!t){toast('날짜와 교육 주제를 입력해주세요','error');return}
  DB.edus.push({id:uid(),iid:CUR,date:d,type:document.getElementById('edu-type').value,topic:t});
  save();closeSov('sov-edu');renderMEdu();toast('교육 기록 저장','success');
}
function delEdu(id){DB.edus=DB.edus.filter(e=>e.id!==id);save();renderMEdu();}
function importEduCSV(event){
  const file=event.target.files[0];if(!file)return;
  const reader=new FileReader();
  reader.onload=function(e){
    const lines=e.target.result.split('\n').filter(l=>l.trim());
    let added=0;
    lines.slice(1).forEach(line=>{
      const cols=line.split(',').map(c=>c.replace(/^"|"$/g,'').trim());
      if(cols[0]){{DB.edus.push({id:uid(),iid:CUR,date:cols[0]||today(),type:cols[1]||'대면',topic:cols[2]||''});added++;}}
    });
    save();renderMEdu();toast(added+'건 교육 기록 가져오기 완료','success');
  };
  reader.readAsText(file,'utf-8');
  event.target.value='';
}

/* OUTPUT */
function renderMOutput(){
  const i=DB.insts.find(x=>x.id===CUR);if(!i)return;
  const outs=(i.out||[]);
  const el=document.getElementById('m-output');
  if(!outs.length){el.innerHTML=`<div class="empty">Output 기록이 없습니다<br><small>우측 상단 '+ 기록 추가' 버튼으로 등록하세요</small></div>`;return;}
  el.innerHTML=outs.slice().reverse().map((o,idx)=>`
    <div class="out-hist-item">
      <div class="out-hist-date">${fmt(o.date)} ${o.best?'⭐':''}</div>
      <div style="display:flex;gap:10px;margin-bottom:6px;flex-wrap:wrap">
        <span class="badge bb">다운로드 ${o.dl||0}회</span>
        ${o.file?`<span class="badge bg">📎 ${o.file}</span>`:''}
      </div>
      ${o.case?`<div style="font-size:12px;color:var(--tx2);line-height:1.6;margin-bottom:4px"><strong>활용 사례:</strong> ${o.case}</div>`:''}
      ${o.idea?`<div style="font-size:12px;color:var(--tx3);line-height:1.6"><strong>아이디어:</strong> ${o.idea}</div>`:''}
      <button class="btn btn-xs btn-d" style="margin-top:7px" onclick="delOutput(${outs.length-1-idx})">삭제</button>
    </div>`).join('');
}
function openAddOutput(){
  document.getElementById('out-date').value=today();
  document.getElementById('out-dl').value=0;
  document.getElementById('out-case').value='';
  document.getElementById('out-idea').value='';
  document.getElementById('out-best').checked=false;
  openSov('sov-output');
}
function saveOutput(){
  const i=DB.insts.find(x=>x.id===CUR);if(!i)return;
  if(!i.out)i.out=[];
  const fileEl=document.getElementById('out-file');
  const fileName=fileEl.files.length?fileEl.files[0].name:'';
  i.out.push({date:document.getElementById('out-date').value,dl:parseInt(document.getElementById('out-dl').value)||0,case:document.getElementById('out-case').value.trim(),idea:document.getElementById('out-idea').value.trim(),best:document.getElementById('out-best').checked,file:fileName});
  save();closeSov('sov-output');renderMOutput();toast('Output 기록 저장','success');
  fileEl.value='';
}
function delOutput(idx){
  const i=DB.insts.find(x=>x.id===CUR);if(!i||!i.out)return;
  // idx is reversed index
  const realIdx=i.out.length-1-idx;
  i.out.splice(realIdx,1);save();renderMOutput();
}

/* INST CRUD */
function openAddInst(){
  document.getElementById('sov-inst-title').textContent='기관 추가';
  document.getElementById('ei-id').value='';
  ['ei-name','ei-res','ei-addr','ei-dir','ei-tel','ei-feat'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('ei-grade-sel')?document.getElementById('ei-grade-sel').value='':'';
  openSov('sov-inst');
}
function openEditInst(){
  const i=DB.insts.find(x=>x.id===CUR);if(!i)return;
  document.getElementById('sov-inst-title').textContent='기관 정보 수정';
  document.getElementById('ei-id').value=i.id;
  document.getElementById('ei-name').value=i.name;
  document.getElementById('ei-res').value=i.res;
  document.getElementById('ei-branch').value=i.branch;
  document.getElementById('ei-region').value=i.region;
  document.getElementById('ei-addr').value=i.addr;
  document.getElementById('ei-dir').value=i.dir;
  document.getElementById('ei-tel').value=i.tel;
  document.getElementById('ei-yr').value=i.yr;
  document.getElementById('ei-hub').value=i.hub;
  document.getElementById('ei-feat').value=i.feat||'';
  openSov('sov-inst');
}
function saveInst(){
  const name=document.getElementById('ei-name').value.trim(),res=document.getElementById('ei-res').value.trim();
  if(!name||!res){toast('기관명과 담당연구원은 필수입니다','error');return}
  const editId=document.getElementById('ei-id').value;
  const data={name,res,branch:document.getElementById('ei-branch').value,region:document.getElementById('ei-region').value,addr:document.getElementById('ei-addr').value.trim(),dir:document.getElementById('ei-dir').value.trim(),tel:document.getElementById('ei-tel').value.trim(),yr:parseInt(document.getElementById('ei-yr').value),hub:document.getElementById('ei-hub').value,feat:document.getElementById('ei-feat').value.trim()};
  if(editId){
    const idx=DB.insts.findIndex(x=>x.id===editId);
    if(idx>=0){const old=DB.insts[idx];data.id=editId;data.grade=old.grade;data.scores=old.scores;data.gradeHistory=old.gradeHistory;data.out=old.out;DB.insts[idx]=data;}
  } else {
    data.id=uid();data.grade='';data.scores=[3,3,3,3,3];data.gradeHistory=[];data.out=[];DB.insts.push(data);
  }
  save();closeSov('sov-inst');renderInst();renderDash();if(editId)openModal(editId);
  toast(editId?'기관 정보 수정 완료':'기관 추가 완료','success');
}
function confirmDelCurrent(){confirmDel(CUR)}
function confirmDel(id){
  const i=DB.insts.find(x=>x.id===id);if(!i)return;
  document.getElementById('conf-t').textContent='기관 삭제';
  document.getElementById('conf-m').textContent=`"${i.name}"을(를) 삭제하시겠습니까?\n관련 방문기록, VOC, 교육 기록도 모두 삭제됩니다.`;
  document.getElementById('conf-ok').onclick=()=>{delInst(id);closeConf()};
  document.getElementById('conf-ov').classList.add('open');
}
function delInst(id){
  DB.insts=DB.insts.filter(i=>i.id!==id);
  DB.visits=DB.visits.filter(v=>v.iid!==id);
  DB.vocs=DB.vocs.filter(v=>v.iid!==id);
  DB.edus=DB.edus.filter(e=>e.iid!==id);
  save();closeInstModal();renderInst();renderDash();toast('기관 삭제 완료');
}

/* CSV IMPORT INST */
function importInstCSV(event){
  const file=event.target.files[0];if(!file)return;
  const reader=new FileReader();
  reader.onload=function(e){
    const lines=e.target.result.split('\n').filter(l=>l.trim());
    let added=0;
    lines.slice(1).forEach(line=>{
      const c=line.split(',').map(x=>x.replace(/^"|"$/g,'').trim());
      if(c[0]){
        DB.insts.push({id:uid(),name:c[0]||'',res:c[1]||'',branch:c[2]||'서울지사',region:c[3]||'서울',addr:c[4]||'',dir:c[5]||'',tel:c[6]||'',yr:parseInt(c[7])||1,hub:'N',grade:'',feat:c[8]||'',scores:[3,3,3,3,3],gradeHistory:[],out:[]});
        added++;
      }
    });
    save();renderInst();toast(added+'개 기관 추가 완료','success');
  };
  reader.readAsText(file,'utf-8');
  event.target.value='';
}
function exportCSV(){
  const insts=filteredInsts();
  const rows=[['기관명','담당연구원','지사','지역','원장명','연락처','연차','등급','거점원','VOC건수','교육건수'],
    ...insts.map(i=>{const vc=DB.vocs.filter(v=>v.iid===i.id).length;const ec=DB.edus.filter(e=>e.iid===i.id).length;return[i.name,i.res,i.branch,i.region,i.dir,i.tel,i.yr+'년차',i.grade||'미분류',i.hub,vc,ec];})];
  const csv='\uFEFF'+rows.map(r=>r.map(c=>`"${String(c).replace(/"/g,'""')}"`).join(',')).join('\n');
  const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));
  a.download=`기관목록_${today()}.csv`;a.click();toast('CSV 다운로드','success');
}

/* VOC PAGE */
function renderVoc(){
  const vocs=DB.vocs;
  const pend=vocs.filter(v=>v.status==='미처리').length;
  const pb=document.getElementById('voc-pending-badge');pb.textContent=pend;pb.style.display=pend>0?'':'none';
  document.getElementById('voc-stats').innerHTML=`
    <div class="sc" style="border-top:3px solid var(--bl)"><div class="sc-lb">전체 VOC</div><div class="sc-v c-ac">${vocs.length}</div></div>
    <div class="sc" style="border-top:3px solid var(--am)"><div class="sc-lb">미처리 VOC</div><div class="sc-v c-am">${pend}</div><div class="sc-s">처리 필요</div></div>`;
  renderVocDrill();renderVocTypeDist();renderVocKw();renderVocTop();renderVocList();
  const vfl=document.getElementById('voc-filter-inst-label');
  const vcl=document.getElementById('voc-clear-filter');
  if(VOC_FILTER_IID){const inst=DB.insts.find(i=>i.id===VOC_FILTER_IID);vfl.textContent=inst?`📍 ${inst.name} 필터 중`:'';vcl.style.display='';}
  else{vfl.textContent='';vcl.style.display='none';}
}
function clearVocInstFilter(){VOC_FILTER_IID=null;DRILL={level:'months',month:null,iid:null};renderVoc();}

function renderVocDrill(){
  renderVocBc();
  const el=document.getElementById('voc-drill-chart');
  const tel=document.getElementById('voc-drill-table');
  if(DRILL.level==='months'||DRILL.level==='detail_all'){
    const mc=new Array(12).fill(0);DB.vocs.forEach(v=>{const m=mon(v.date);if(m>=1&&m<=12)mc[m-1]++;});
    const mx=Math.max(...mc,1);const curM=new Date().getMonth();
    el.innerHTML=`<div class="mc">${['1','2','3','4','5','6','7','8','9','10','11','12'].map((m,i)=>{const h=Math.max(Math.round(mc[i]/mx*64),4),isc=i===curM;return`<div class="mcc"><div class="mcb" style="height:${h}px;background:${isc?'var(--ac)':'var(--bd2)'}" onclick="drillToMonth(${i+1})" title="${m}월 ${mc[i]}건"></div><div class="mcl" style="color:${isc?'var(--ac)':'var(--tx3)'}">${m}</div></div>`;}).join('')}</div><div style="font-size:11px;color:var(--tx3);text-align:center;margin-top:8px">막대 클릭 → 기관별 보기</div>`;
    if(DRILL.level==='detail_all'&&DRILL.iid){showInstVocs(DRILL.iid);}else{tel.innerHTML='';}
  } else if(DRILL.level==='insts'){
    const m=DRILL.month;const mvocs=DB.vocs.filter(v=>mon(v.date)===m);
    const byInst=DB.insts.map(i=>({i,vs:mvocs.filter(v=>v.iid===i.id)})).filter(x=>x.vs.length>0);
    const mx2=Math.max(...byInst.map(x=>x.vs.length),1);
    el.innerHTML=`<div style="font-size:12px;color:var(--tx2);margin-bottom:10px">${m}월 VOC — 기관 클릭으로 세부 보기</div>${byInst.map(x=>{const p=Math.round(x.vs.length/mx2*100);return`<div class="bcr" style="cursor:pointer" onclick="drillToInst('${x.i.id}')"><div class="bcr-l"><span class="tl">${x.i.name}</span><span>${x.vs.length}건</span></div><div class="bcr-t"><div class="bcr-f" style="width:${p}%;background:var(--am)"></div></div></div>`;}).join('')}`;
    tel.innerHTML=`<div style="font-size:11px;color:var(--tx3)">기관 클릭 → 세부 내용</div>`;
  } else if(DRILL.level==='detail'){
    el.innerHTML='';showInstVocs(DRILL.iid);
  }
}
function showInstVocs(iid){
  const inst=DB.insts.find(i=>i.id===iid);
  let vs=DB.vocs.filter(v=>v.iid===iid);
  if(DRILL.month)vs=vs.filter(v=>mon(v.date)===DRILL.month);
  vs.sort((a,b)=>b.date.localeCompare(a.date));
  document.getElementById('voc-drill-table').innerHTML=`<div style="font-size:12px;font-weight:600;color:var(--tx2);margin-bottom:10px">${inst?inst.name:''} ${DRILL.month?DRILL.month+'월 ':''} VOC (${vs.length}건)</div>${vs.length?`<div class="tw"><table><thead><tr><th>등록일</th><th>유형</th><th>내용</th><th>본사 대응</th><th>상태</th></tr></thead><tbody>${vs.map(v=>`<tr><td style="font-size:11px;color:var(--tx3)">${fmt(v.date)}</td><td>${vocTypeBadge(v.type)}</td><td style="font-size:12px;color:var(--tx2)">${v.content}</td><td style="font-size:11px;color:var(--tx3)">${v.response||'—'}</td><td>${statusBadge(v.status)}</td></tr>`).join('')}</tbody></table></div>`:'<div class="empty">VOC 없음</div>'}`;
}
function drillToMonth(m){DRILL={level:'insts',month:m,iid:null};renderVocBc();renderVocDrill();}
function drillToInst(iid){DRILL={level:'detail',month:DRILL.month,iid};renderVocBc();renderVocDrill();}
function drillReset(){DRILL={level:'months',month:null,iid:null};VOC_FILTER_IID=null;renderVocBc();renderVocDrill();}
function drillBack(level,m){DRILL={level,month:m||null,iid:null};renderVocBc();renderVocDrill();}
function renderVocBc(){
  const el=document.getElementById('voc-bc');
  let html=`<span style="color:var(--bl);cursor:pointer;font-size:12px" onclick="drillReset()">전체</span>`;
  if(DRILL.month)html+=`<span style="color:var(--tx3);font-size:12px"> › </span><span style="color:var(--bl);cursor:pointer;font-size:12px" onclick="drillBack('insts',${DRILL.month})">${DRILL.month}월</span>`;
  if((DRILL.level==='detail'||DRILL.level==='detail_all')&&DRILL.iid){const inst=DB.insts.find(i=>i.id===DRILL.iid);html+=`<span style="color:var(--tx3);font-size:12px"> › </span><span style="color:var(--tx2);font-size:12px">${inst?inst.name:''}</span>`;}
  el.innerHTML=html;
}
function renderVocTypeDist(){
  const period=document.getElementById('voc-type-period')?.value||'all';
  const vocs=period==='all'?DB.vocs:DB.vocs.filter(v=>mon(v.date)===parseInt(period));
  const types=['기능 개선','오류','데이터 활용 관련','기타'];
  const colors=['var(--pp)','var(--rd)','var(--bl)','var(--tx3)'];
  const tot=Math.max(vocs.length,1);
  document.getElementById('voc-type-chart').innerHTML=types.map((t,i)=>{
    const c=vocs.filter(v=>v.type===t||v.type==='활용성'&&t==='데이터 활용 관련').length,p=Math.round(c/tot*100);
    return`<div class="bcr"><div class="bcr-l"><span>${t}</span><span>${c}건 (${p}%)</span></div><div class="bcr-t"><div class="bcr-f" style="width:${p}%;background:${colors[i]}"></div></div></div>`;
  }).join('');
}
function renderVocTop(){
  const period=document.getElementById('voc-top-period')?.value||'all';
  const vocs=period==='all'?DB.vocs:DB.vocs.filter(v=>mon(v.date)===parseInt(period));
  const top=DB.insts.map(i=>({name:i.name,id:i.id,c:vocs.filter(v=>v.iid===i.id).length})).filter(x=>x.c>0).sort((a,b)=>b.c-a.c).slice(0,10);
  const mx=Math.max(...top.map(x=>x.c),1);
  document.getElementById('voc-top').innerHTML=top.length?top.map(x=>{const p=Math.round(x.c/mx*100);const col=x.c>=5?'var(--rd)':x.c>=3?'var(--am)':'var(--g)';return`<div class="bcr" style="cursor:pointer" onclick="goVocInstFilter('${x.id}')"><div class="bcr-l"><span class="tl">${x.name}</span><span>${x.c}건</span></div><div class="bcr-t"><div class="bcr-f" style="width:${p}%;background:${col}"></div></div></div>`;}).join(''):'<div class="empty">데이터 없음</div>';
}
function goVocInstFilter(iid){DRILL={level:'detail_all',month:null,iid};VOC_FILTER_IID=iid;renderVocDrill();renderVocBc();renderVocList();const inst=DB.insts.find(i=>i.id===iid);document.getElementById('voc-filter-inst-label').textContent=inst?`📍 ${inst.name} 필터 중`:'';document.getElementById('voc-clear-filter').style.display='';}
function renderVocKw(){
  const allText=DB.vocs.map(v=>v.content).join(' ');
  const kws=extractKW(allText);
  const kwC=[['rgba(124,58,237,.1)','var(--pp)'],['rgba(37,99,235,.1)','var(--bl)'],['rgba(220,38,38,.1)','var(--rd)'],['rgba(22,163,74,.1)','var(--g)'],['rgba(217,119,6,.1)','var(--am)']];
  document.getElementById('voc-kw').innerHTML=kws.length?`<div style="display:flex;flex-wrap:wrap;gap:7px">${kws.map((k,i)=>{const[bg,cl]=kwC[i%5],s=Math.max(11,Math.min(15,11+k[1]));return`<span style="padding:4px 12px;border-radius:20px;background:${bg};color:${cl};font-size:${s}px;font-weight:600">${k[0]} <strong>${k[1]}</strong></span>`;}).join('')}</div>`:'<div class="empty">데이터 부족</div>';
}
function filteredVocs(){
  const q=(document.getElementById('voc-q')?.value||'').toLowerCase();
  const tf=document.getElementById('voc-f-type')?.value||'';
  const sf=document.getElementById('voc-f-status')?.value||'';
  return DB.vocs.filter(v=>{
    const inst=DB.insts.find(i=>i.id===v.iid);const n=inst?inst.name:'';
    if(VOC_FILTER_IID&&v.iid!==VOC_FILTER_IID)return false;
    if(q&&!n.toLowerCase().includes(q)&&!v.content.toLowerCase().includes(q))return false;
    if(tf&&v.type!==tf)return false;
    if(sf&&v.status!==sf)return false;
    if(IMP_ONLY&&v.type!=='기능 개선')return false;
    return true;
  }).sort((a,b)=>b.date.localeCompare(a.date));
}
function renderVocList(){
  const all=filteredVocs(),total=all.length,pages=Math.max(1,Math.ceil(total/VPP));
  if(VOC_P>pages)VOC_P=1;
  const slice=all.slice((VOC_P-1)*VPP,VOC_P*VPP);
  document.getElementById('voc-tbody').innerHTML=slice.length?slice.map(v=>{
    const inst=DB.insts.find(i=>i.id===v.iid);const n=inst?inst.name:'(삭제된 기관)';
    return`<tr><td style="font-size:11px;color:var(--tx3);white-space:nowrap">${fmt(v.date)}</td><td><span class="tl" onclick="openModal('${v.iid}')">${n}</span></td><td>${vocTypeBadge(v.type)}</td><td style="font-size:12px;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--tx2)" title="${v.content}">${v.content}</td><td style="font-size:11px;color:var(--tx3);max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${v.response||''}">${v.response||'—'}</td><td>${statusBadge(v.status)}</td><td><button class="btn btn-xs btn-d" onclick="delVocPage('${v.id}')">삭제</button></td></tr>`;
  }).join(''):`<tr><td colspan="7"><div class="empty">VOC 기록이 없습니다</div></td></tr>`;
  document.getElementById('voc-pi').textContent=`총 ${total}건`;
  renderPager('voc-pb',VOC_P,pages,p=>{VOC_P=p;renderVocList()});
}
function toggleImpFilter(){IMP_ONLY=!IMP_ONLY;const btn=document.getElementById('btn-imp-filter');btn.style.background=IMP_ONLY?'var(--ppb)':'';btn.style.color=IMP_ONLY?'var(--pp)':'';renderVocList();}
function openAddVoc(iid){
  const sel=document.getElementById('voc-inst-sel');
  sel.innerHTML=DB.insts.map(i=>`<option value="${i.id}">${i.name}</option>`).join('');
  if(iid)sel.value=iid;
  document.getElementById('voc-date').value=today();
  document.getElementById('voc-content').value='';document.getElementById('voc-response').value='';
  openSov('sov-voc');
}
function saveVoc(){
  const c=document.getElementById('voc-content').value.trim();
  if(!c){toast('VOC 내용을 입력해주세요','error');return}
  DB.vocs.push({id:uid(),iid:document.getElementById('voc-inst-sel').value,date:document.getElementById('voc-date').value,type:document.getElementById('voc-type-sel').value,status:document.getElementById('voc-status-sel').value,content:c,response:document.getElementById('voc-response').value.trim()});
  save();closeSov('sov-voc');renderVoc();renderDash();renderMVoc();toast('VOC 등록 완료','success');
}
function delVocPage(id){DB.vocs=DB.vocs.filter(v=>v.id!==id);save();renderVoc();renderDash();}

/* HUBS */
const HUB_CL=[
  {label:'담당자 태도 및 협조도',desc:'질문 및 응답 태도 / 미팅 참여도 / 후속 협조 의사'},
  {label:'시스템 이해도',desc:'핵심 기능과 데이터 의미를 이해하는 수준'},
  {label:'실제 활용 의지',desc:'교육 후 활용 의향, 다음 액션 활용 의지'},
  {label:'현장 반응 온도',desc:'교직원 반응, 불신/불편/방어적 반응 여부'},
  {label:'후속 관리 필요도',desc:'추가 방문, 재교육, 불만 대응 필요 수준'},
];
function renderHubs(){
  // Filter bar state
  const q=(document.getElementById('hub-q')?.value||'').toLowerCase();
  const reg=document.getElementById('hub-region')?.value||'';
  const br=document.getElementById('hub-branch')?.value||'';
  const gr=document.getElementById('hub-grade')?.value||'';
  const res=document.getElementById('hub-res')?.value||'';

  // Populate researcher filter
  const resEl=document.getElementById('hub-res');
  if(resEl){
    const curRes=resEl.value;
    const resList=[...new Set(DB.insts.filter(i=>i.hub==='Y').map(i=>i.res))].sort();
    resEl.innerHTML='<option value="">담당연구원 전체</option>'+resList.map(r=>`<option${r===curRes?' selected':''}>${r}</option>`).join('');
  }

  const hubs=DB.insts.filter(i=>{
    if(i.hub!=='Y')return false;
    if(q&&!i.name.toLowerCase().includes(q)&&!i.dir.toLowerCase().includes(q))return false;
    if(reg&&i.region!==reg)return false;
    if(br&&i.branch!==br)return false;
    if(gr&&i.grade!==gr)return false;
    if(res&&i.res!==res)return false;
    return true;
  });

  // Stats
  const allHubs=DB.insts.filter(i=>i.hub==='Y');
  const gc={A:0,B:0,C:0,D:0};allHubs.forEach(i=>{if(i.grade&&gc[i.grade]!==undefined)gc[i.grade]++;});
  document.getElementById('hub-stats').innerHTML=`
    <div class="sc" style="border-top:3px solid var(--tx)"><div class="sc-lb">전체 거점원</div><div class="sc-v">${allHubs.length}</div></div>
    <div class="sc" style="border-top:3px solid var(--g)"><div class="sc-lb">A 등급</div><div class="sc-v c-g">${gc.A}</div></div>
    <div class="sc" style="border-top:3px solid var(--bl)"><div class="sc-lb">B 등급</div><div class="sc-v c-ac">${gc.B}</div></div>
    <div class="sc" style="border-top:3px solid var(--am)"><div class="sc-lb">C 등급</div><div class="sc-v c-am">${gc.C}</div></div>
    <div class="sc" style="border-top:3px solid var(--rd)"><div class="sc-lb">D 등급</div><div class="sc-v c-rd">${gc.D}</div></div>`;

  // Pager
  const HUB_IPP=15;
  const total=hubs.length,pages=Math.max(1,Math.ceil(total/HUB_IPP));
  if(HUB_P>pages)HUB_P=1;
  const slice=hubs.slice((HUB_P-1)*HUB_IPP,HUB_P*HUB_IPP);

  const tbody=document.getElementById('hub-tbody');
  tbody.innerHTML=slice.length?slice.map(i=>{
    const vc=DB.vocs.filter(v=>v.iid===i.id).length;
    const edCnt=DB.edus.filter(e=>e.iid===i.id).length;
    const vs=DB.visits.filter(v=>v.iid===i.id).sort((a,b)=>b.date.localeCompare(a.date));
    const lv=vs.length?fmt(vs[0].date):'—';
    const hubHtml=`<span class="badge bg">Y</span>`;
    const dirHtml=`<div class="dir-wrap"><button class="dir-btn" onclick="toggleDirDrop(event,'hd_${i.id}')">${i.dir} ▾</button><div class="dir-drop" id="hd_${i.id}"><div class="dir-drop-name">${i.dir} 원장</div><div class="dir-drop-tel">📞 ${i.tel||'—'}</div><button class="dir-drop-copy" onclick="copyTel('${i.tel||''}','hd_${i.id}')">번호 복사</button></div></div>`;
    return`<tr>
      <td><span class="tl" onclick="openModal('${i.id}')">${i.name}</span></td>
      <td>${gpHtml(i.grade,i.id)}</td>
      <td>${i.region}</td><td style="font-size:11px;color:var(--tx3)">${i.branch}</td>
      <td>${i.res}</td><td>${dirHtml}</td>
      <td>${hubHtml}</td><td>${i.yr}년차</td>
      <td><span class="tl" onclick="openModal('${i.id}');setTimeout(()=>{const t=document.querySelector('.mt[onclick*=mt-edu]');if(t)t.click();},120)">${edCnt}</span></td>
      <td><span class="tl" style="color:${vc>=4?'var(--rd)':vc>=2?'var(--am)':'var(--bl)'}" onclick="openModal('${i.id}');setTimeout(()=>{const t=document.querySelector('.mt[onclick*=mt-voc]');if(t)t.click();},120)">${vc}</span></td>
      <td style="font-size:11px;color:var(--tx3)">${lv}</td>
      <td style="display:flex;gap:4px">
        <button class="btn btn-xs btn-g" onclick="openModal('${i.id}')">상세</button>
        <button class="btn btn-xs btn-d" onclick="confirmDel('${i.id}')">삭제</button>
      </td>
    </tr>`;
  }).join(''):`<tr><td colspan="12"><div class="empty">조건에 맞는 거점원 기관이 없습니다</div></td></tr>`;

  const pi=document.getElementById('hub-pi');if(pi)pi.textContent=`총 ${total}개`;
  renderPager('hub-pb',HUB_P,pages,p=>{HUB_P=p;renderHubs()});
}

/* removed: function setHubScore( */

/* removed: function updateHubDisplay( */

/* removed: function applyHubChecklist( */

function renderHubPreview(iid){
  const card=document.getElementById('hub-preview-card');
  if(!iid){card.classList.remove('show');card.innerHTML='';return;}
  const inst=DB.insts.find(i=>i.id===iid);if(!inst){card.classList.remove('show');return;}
  const vocs=DB.vocs.filter(v=>v.iid===iid).sort((a,b)=>b.date.localeCompare(a.date));
  const edus=DB.edus.filter(e=>e.iid===iid).sort((a,b)=>b.date.localeCompare(a.date));
  const visits=DB.visits.filter(v=>v.iid===iid).sort((a,b)=>b.date.localeCompare(a.date));
  const total=calcTotal(inst.scores);
  card.innerHTML=`
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:12px">
      <div><div style="font-size:15px;font-weight:700">${inst.name}</div><div style="font-size:11px;color:var(--tx3);margin-top:2px">${inst.region} · ${inst.branch} · 담당: ${inst.res}</div></div>
      ${gpHtml(inst.grade)}
    </div>
    <div class="hpv-grid">
      <div class="hpv-cell"><div class="hpv-cell-k">원장/전화</div><div class="hpv-cell-v">${inst.dir} <span style="color:var(--bl);font-size:11px">${inst.tel||''}</span></div></div>
      <div class="hpv-cell"><div class="hpv-cell-k">체크리스트 총점</div><div class="hpv-cell-v" style="color:${gradeColor[inst.grade]||'var(--tx)'};font-weight:700">${total}점 (${gradeLabel[inst.grade]||'미분류'})</div></div>
      <div class="hpv-cell"><div class="hpv-cell-k">누적 VOC</div><div class="hpv-cell-v" style="color:${vocs.length>=4?'var(--rd)':vocs.length>=2?'var(--am)':'var(--g)'}">${vocs.length}건</div></div>
      <div class="hpv-cell"><div class="hpv-cell-k">교육 건수</div><div class="hpv-cell-v">${edus.length}건</div></div>
    </div>
    <div style="margin-bottom:10px"><div class="hpv-sec-title">최근 VOC (${Math.min(vocs.length,3)}건)</div>${vocs.slice(0,3).map(v=>`<div class="hpv-item"><span class="hpv-item-date">${fmt(v.date)}</span><span>${vocTypeBadge(v.type)} ${v.content.length>40?v.content.slice(0,40)+'…':v.content}</span></div>`).join('')||'<div style="font-size:12px;color:var(--tx3)">없음</div>'}</div>
    <div style="margin-bottom:10px"><div class="hpv-sec-title">최근 교육 (${Math.min(edus.length,3)}건)</div>${edus.slice(0,3).map(e=>`<div class="hpv-item"><span class="hpv-item-date">${fmt(e.date)}</span><span><span class="badge bb" style="font-size:10px">${e.type}</span> ${(e.topic||e.content||'').slice(0,40)}</span></div>`).join('')||'<div style="font-size:12px;color:var(--tx3)">없음</div>'}</div>
    <div style="margin-bottom:12px"><div class="hpv-sec-title">최근 방문 (${Math.min(visits.length,3)}건)</div>${visits.slice(0,3).map(v=>`<div class="hpv-item"><span class="hpv-item-date">${fmt(v.date)}</span><span>${vtBadge(v.type)} ${v.content.length>45?v.content.slice(0,45)+'…':v.content}</span></div>`).join('')||'<div style="font-size:12px;color:var(--tx3)">없음</div>'}</div>
    <div style="display:flex;gap:7px;flex-wrap:wrap">
      <button class="btn btn-sm" style="background:var(--ppb);color:var(--pp);border:1px solid rgba(124,58,237,.2)" onclick="goVocPage('${iid}',null)">VOC 보기 (${vocs.length}건)</button>
      <button class="btn btn-sm" style="background:var(--blb);color:var(--bl);border:1px solid rgba(37,99,235,.2)" onclick="showEduHist('${iid}')">교육 이력 (${edus.length}건)</button>
      <button class="btn btn-p btn-sm" onclick="openModal('${iid}')">기관 상세 보기</button>
    </div>`;
  card.classList.add('show');
}
function showEduHist(iid){
  const inst=DB.insts.find(i=>i.id===iid);if(!inst)return;
  const es=DB.edus.filter(e=>e.iid===iid).sort((a,b)=>b.date.localeCompare(a.date));
  document.getElementById('sov-edu-title').textContent=`${inst.name} 교육 이력`;
  document.getElementById('sov-edu-body').innerHTML=es.length?es.map(e=>`<div class="edu-card"><div style="display:flex;gap:7px;align-items:center;margin-bottom:5px"><span class="badge bb" style="font-size:10px">${e.type}</span><span style="font-size:11px;color:var(--tx3)">${fmt(e.date)}</span></div><div style="font-size:13px;color:var(--tx2)">${e.topic||e.content||'—'}</div></div>`).join(''):'<div class="empty">교육 이력 없음</div>';
  openSov('sov-edu-hist');
}

/* KEYWORD */
function extractKW(text){
  const pre=['사진 반복','활동 불일치','로딩 오류','연령 맞춤','콘텐츠 부족','UI 개선','인쇄 기능','업로드 오류','용량 제한','자동 추천','링크 만료'];
  const counts={};
  pre.forEach(k=>{const c=(text.match(new RegExp(k,'gi'))||[]).length;if(c>0)counts[k]=c;});
  const words=text.match(/[가-힣]{2,5}/g)||[];
  const skip=new Set(['있어요','요청','기능','경우','교사','활용','기관','내용','부탁','니다','합니','해요','아요','어요','되어','에서','에는','으로','부분','현상','문제','이유','수준']);
  words.forEach(w=>{if(!skip.has(w)&&w.length>=2)counts[w]=(counts[w]||0)+1;});
  return Object.entries(counts).filter(([,v])=>v>0).sort((a,b)=>b[1]-a[1]).slice(0,12);
}

/* PHONE DROPDOWN */
function toggleDirDrop(e,id){
  e.stopPropagation();
  const el=document.getElementById(id);
  document.querySelectorAll('.dir-drop.show').forEach(d=>{if(d.id!==id)d.classList.remove('show');});
  el.classList.toggle('show');
}
function copyTel(tel,dropId){
  if(!tel){alert('전화번호 정보가 없습니다');return;}
  navigator.clipboard.writeText(tel).then(()=>{toast('전화번호 복사됨','success');const el=document.getElementById(dropId);if(el)el.classList.remove('show');}).catch(()=>{const ta=document.createElement('textarea');ta.value=tel;document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);toast('전화번호 복사됨','success');const el=document.getElementById(dropId);if(el)el.classList.remove('show');});
}
document.addEventListener('click',()=>document.querySelectorAll('.dir-drop.show').forEach(d=>d.classList.remove('show')));

/* MODALS */
function openSov(id){document.getElementById(id).classList.add('open');if(id==='sov-edu-rates')renderEduRatesPanel();if(id==='sov-alerts')renderAlerts();}
function closeSov(id){document.getElementById(id).classList.remove('open')}
function closeConf(){document.getElementById('conf-ov').classList.remove('open')}
document.querySelectorAll('.sov').forEach(el=>el.addEventListener('click',e=>{if(e.target===el)el.classList.remove('open')}));
document.getElementById('inst-modal').addEventListener('click',e=>{if(e.target===document.getElementById('inst-modal'))closeInstModal()});
document.getElementById('conf-ov').addEventListener('click',e=>{if(e.target===document.getElementById('conf-ov'))closeConf()});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){closeInstModal();document.querySelectorAll('.sov.open').forEach(el=>el.classList.remove('open'));closeConf();document.querySelectorAll('.ghp').forEach(el=>el.remove());}
});

/* PAGER */
function renderPager(elId,cur,total,cb){
  const el=document.getElementById(elId);let h='';
  if(cur>1)h+=`<button class="pgb" onclick="(${cb.toString()})(${cur-1})">‹</button>`;
  for(let p=Math.max(1,cur-2);p<=Math.min(total,cur+2);p++)h+=`<button class="pgb${p===cur?' active':''}" onclick="(${cb.toString()})(${p})">${p}</button>`;
  if(cur<total)h+=`<button class="pgb" onclick="(${cb.toString()})(${cur+1})">›</button>`;
  el.innerHTML=h;
}

/* TOAST */
function toast(msg,type='info'){
  const el=document.createElement('div');el.className=`toast toast-${type}`;el.textContent=msg;
  document.getElementById('toasts').appendChild(el);
  requestAnimationFrame(()=>requestAnimationFrame(()=>el.classList.add('show')));
  setTimeout(()=>{el.classList.remove('show');setTimeout(()=>el.remove(),350)},2800);
}

/* GOINSTFILTER */
function goInstFilter(field,val){
  nav('inst',document.querySelectorAll('.ni')[1]);
  setTimeout(()=>{if(field==='grade'){const el=document.getElementById('fi-grade');if(el)el.value=val;}renderInst();},50);
}

/* EXPORT HUB CSV */
function exportHubCSV(){
  const hubs=DB.insts.filter(i=>i.hub==='Y');
  const rows=[['기관명','담당연구원','지사','지역','원장명','연락처','연차','등급','VOC건수','교육건수'],
    ...hubs.map(i=>{const vc=DB.vocs.filter(v=>v.iid===i.id).length;const ec=DB.edus.filter(e=>e.iid===i.id).length;return[i.name,i.res,i.branch,i.region,i.dir,i.tel,i.yr+'년차',i.grade||'미분류',vc,ec];})];
  const csv='\uFEFF'+rows.map(r=>r.map(c=>'"'+String(c).replace(/"/g,'""')+'"').join(',')).join('\n');
  const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));
  a.download='거점원목록_'+today()+'.csv';a.click();toast('CSV 다운로드','success');
}

/* ═══ SPLASH ═══ */
window.addEventListener('load',()=>{
  setTimeout(()=>{
    const s=document.getElementById('splash');
    if(s)s.classList.add('hide');
    setTimeout(()=>{if(s)s.style.display='none';},600);
  },900);
});

/* ═══ DARK/LIGHT TOGGLE ═══ */
(function(){
  const saved=localStorage.getItem('crm_theme');
  if(saved==='dark')document.body.classList.add('dark');
})();
function toggleTheme(){
  const isDark=document.body.classList.toggle('dark');
  localStorage.setItem('crm_theme',isDark?'dark':'light');
  document.getElementById('theme-toggle').textContent=isDark?'☀️':'🌙';
}

/* ═══ ALERTS / NOTIFICATIONS ═══ */
function getAlerts(){
  const alerts=[];
  const now=new Date();
  DB.insts.forEach(i=>{
    // 방문 60일 이상 공백
    const vs=DB.visits.filter(v=>v.iid===i.id).sort((a,b)=>b.date.localeCompare(a.date));
    if(vs.length){
      const daysSince=Math.floor((now-new Date(vs[0].date))/86400000);
      if(daysSince>=60)alerts.push({type:'visit',icon:'📅',title:`방문 공백 ${daysSince}일`,sub:`${i.name} — 마지막 방문: ${fmt(vs[0].date)}`,iid:i.id,level:daysSince>=90?'rd':'am'});
    } else {
      alerts.push({type:'visit',icon:'📅',title:'방문 기록 없음',sub:`${i.name} — 방문 기록이 한 건도 없습니다`,iid:i.id,level:'am'});
    }
    // 미처리 VOC 5건 이상
    const pendVoc=DB.vocs.filter(v=>v.iid===i.id&&v.status==='미처리').length;
    if(pendVoc>=3)alerts.push({type:'voc',icon:'💬',title:`미처리 VOC ${pendVoc}건`,sub:`${i.name} — 즉시 처리 필요`,iid:i.id,level:pendVoc>=5?'rd':'am'});
    // D등급 기관
    if(i.grade==='D')alerts.push({type:'grade',icon:'🚨',title:'D등급 집중대응 기관',sub:`${i.name} — 즉각 대응 필요`,iid:i.id,level:'rd'});
  });
  // 전체 미처리 VOC
  const totalPend=DB.vocs.filter(v=>v.status==='미처리').length;
  if(totalPend>0)alerts.unshift({type:'global',icon:'🔔',title:`전체 미처리 VOC ${totalPend}건`,sub:'VOC 관리 탭에서 처리해주세요',iid:null,level:totalPend>=10?'rd':'am'});
  return alerts;
}
function updateAlertBadge(){
  const alerts=getAlerts();
  const badge=document.getElementById('alert-count');
  const bell=document.getElementById('alert-bell');
  if(!badge)return;
  if(alerts.length>0){badge.textContent=alerts.length>99?'99+':alerts.length;badge.style.display='flex';}
  else{badge.style.display='none';}
}
function renderAlerts(){
  const alerts=getAlerts();
  const el=document.getElementById('alerts-body');
  if(!el)return;
  if(!alerts.length){el.innerHTML='<div class="empty" style="padding:32px">✅ 현재 알림이 없습니다</div>';return;}
  el.innerHTML=alerts.map(a=>`
    <div class="alert-item" style="cursor:${a.iid?'pointer':'default'}" onclick="${a.iid?`openModal('${a.iid}');closeSov('sov-alerts')`:''}">
      <div class="alert-dot" style="background:var(--${a.level||'am'})"></div>
      <div><div class="alert-item-title">${a.icon} ${a.title}</div><div class="alert-item-sub">${a.sub}</div></div>
    </div>`).join('');
}
document.getElementById('alert-bell')?.addEventListener('click',()=>{renderAlerts();openSov('sov-alerts');});

/* ═══ GLOBAL SEARCH ═══ */
function globalSearch(q){
  const el=document.getElementById('gsearch-results');
  if(!q||q.length<1){el.classList.remove('open');return;}
  const ql=q.toLowerCase();
  const results=[];
  // Insts
  DB.insts.filter(i=>i.name.toLowerCase().includes(ql)||i.dir.toLowerCase().includes(ql)||i.res.toLowerCase().includes(ql)).slice(0,5).forEach(i=>{
    results.push({section:'기관',icon:'🏫',title:i.name,sub:`${i.region} · ${i.res} · ${gradeLabel[i.grade]||'미분류'}`,action:`openModal('${i.id}')`});
  });
  // VOC
  DB.vocs.filter(v=>v.content.toLowerCase().includes(ql)).slice(0,4).forEach(v=>{
    const inst=DB.insts.find(i=>i.id===v.iid);
    results.push({section:'VOC',icon:'💬',title:v.content.length>40?v.content.slice(0,40)+'…':v.content,sub:`${inst?inst.name:'—'} · ${fmt(v.date)} · ${v.status}`,action:`openModal('${v.iid}');setTimeout(()=>{const t=document.querySelector('.mt[onclick*=mt-voc]');if(t)t.click();},120)`});
  });
  // Visits
  DB.visits.filter(v=>v.content.toLowerCase().includes(ql)).slice(0,3).forEach(v=>{
    const inst=DB.insts.find(i=>i.id===v.iid);
    results.push({section:'방문기록',icon:'📋',title:v.content.length>40?v.content.slice(0,40)+'…':v.content,sub:`${inst?inst.name:'—'} · ${fmt(v.date)}`,action:`openModal('${v.iid}')`});
  });
  if(!results.length){el.innerHTML='<div style="padding:16px;text-align:center;color:var(--tx3);font-size:13px">검색 결과 없음</div>';el.classList.add('open');return;}
  let html='';let lastSection='';
  results.forEach(r=>{
    if(r.section!==lastSection){html+=`<div class="gsr-section">${r.section}</div>`;lastSection=r.section;}
    html+=`<div class="gsr-item" onclick="${r.action};document.getElementById('gsearch-results').classList.remove('open');document.getElementById('gsearch').value=''"><div class="gsr-icon">${r.icon}</div><div><div class="gsr-title">${r.title}</div><div class="gsr-sub">${r.sub}</div></div></div>`;
  });
  el.innerHTML=html;el.classList.add('open');
}
function showGsearchResults(){document.getElementById('gsearch-results').classList.add('open');}

/* ═══ CALENDAR ═══ */
let CAL_DATE=new Date();
function nav_orig_ref(){} // placeholder
function calPrev(){CAL_DATE=new Date(CAL_DATE.getFullYear(),CAL_DATE.getMonth()-1,1);renderCal();}
function calNext(){CAL_DATE=new Date(CAL_DATE.getFullYear(),CAL_DATE.getMonth()+1,1);renderCal();}
function renderCal(){
  const y=CAL_DATE.getFullYear(),m=CAL_DATE.getMonth();
  document.getElementById('cal-title').textContent=`${y}년 ${m+1}월`;
  const first=new Date(y,m,1);
  const last=new Date(y,m+1,0);
  const startDay=first.getDay();
  const todayStr=today();
  // Collect all events for this month
  const events={};
  function addEv(dateStr,type,label,iid){
    if(!dateStr)return;
    const d=dateStr.slice(0,7);
    const ym=`${y}-${String(m+1).padStart(2,'0')}`;
    if(!dateStr.startsWith(ym))return;
    const day=parseInt(dateStr.slice(8,10));
    if(!events[day])events[day]=[];
    events[day].push({type,label,iid});
  }
  DB.visits.forEach(v=>{
    const cls=v.type==='컨설팅'?'ev-consult':v.type==='교육'?'ev-edu':'ev-visit';
    const inst=DB.insts.find(i=>i.id===v.iid);
    addEv(v.date,cls,(inst?inst.name.slice(0,5):'—')+' '+v.type,v.iid);
  });
  DB.edus.forEach(e=>{const inst=DB.insts.find(i=>i.id===e.iid);addEv(e.date,'ev-edu',(inst?inst.name.slice(0,5):'—')+' 교육',e.iid);});
  DB.vocs.filter(v=>v.status==='미처리').forEach(v=>{const inst=DB.insts.find(i=>i.id===v.iid);addEv(v.date,'ev-voc',(inst?inst.name.slice(0,5):'—')+' VOC',v.iid);});
  // Build grid
  const totalCells=Math.ceil((startDay+last.getDate())/7)*7;
  let html='';
  for(let c=0;c<totalCells;c++){
    const dayNum=c-startDay+1;
    const isThis=dayNum>=1&&dayNum<=last.getDate();
    const dateStr=`${y}-${String(m+1).padStart(2,'0')}-${String(dayNum).padStart(2,'0')}`;
    const isToday=dateStr===todayStr;
    html+=`<div class="cal-cell${!isThis?' other-month':''}${isToday?' today':''}">`;
    if(isThis){
      html+=`<div class="cal-day">${dayNum}</div>`;
      (events[dayNum]||[]).slice(0,3).forEach(ev=>{
        html+=`<div class="cal-event ${ev.type}" onclick="openModal('${ev.iid}')" title="${ev.label}">${ev.label}</div>`;
      });
      if((events[dayNum]||[]).length>3)html+=`<div style="font-size:9px;color:var(--tx3)">+${events[dayNum].length-3}건</div>`;
    }
    html+='</div>';
  }
  document.getElementById('cal-grid').innerHTML=html;
}

/* ═══ QUARTERLY REPORT ═══ */
function renderReport(){
  const now=new Date();
  const qStart=new Date(now.getFullYear(),Math.floor(now.getMonth()/3)*3,1);
  const qEnd=new Date(now.getFullYear(),Math.floor(now.getMonth()/3)*3+3,0);
  const qStr=`${qStart.getFullYear()}년 ${qStart.getMonth()+1}월 ~ ${qEnd.getMonth()+1}월 (Q${Math.floor(now.getMonth()/3)+1})`;
  const el=document.getElementById('report-period');if(el)el.textContent=qStr;

  const insts=DB.insts,vocs=DB.vocs,edus=DB.edus,visits=DB.visits;
  const gc={A:0,B:0,C:0,D:0,미분류:0};
  insts.forEach(i=>{if(i.grade&&gc[i.grade]!==undefined)gc[i.grade]++;else gc['미분류']++;});
  const hubCnt=insts.filter(i=>i.hub==='Y').length;
  const pendVoc=vocs.filter(v=>v.status==='미처리').length;
  const doneVoc=vocs.filter(v=>v.status==='처리완료').length;
  const eduSet=new Set(edus.map(e=>e.iid)).size;
  const eduRate=Math.round(eduSet/Math.max(insts.length,1)*100);
  const vocRate=Math.round(doneVoc/Math.max(vocs.length,1)*100);

  const sum=document.getElementById('report-summary');
  if(sum)sum.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:12px;margin-bottom:16px">
      ${[['전체 기관',insts.length+'개','var(--ac)'],['거점원',hubCnt+'개','var(--pp)'],['교육 완료율',eduRate+'%','var(--g)'],['VOC 처리율',vocRate+'%','var(--bl)'],['미처리 VOC',pendVoc+'건','var(--rd)']].map(([k,v,c])=>`
        <div style="background:var(--sf2);border:1px solid var(--bd);border-radius:var(--rl);padding:14px;text-align:center">
          <div style="font-size:10px;color:var(--tx3);font-weight:600;text-transform:uppercase;margin-bottom:6px">${k}</div>
          <div style="font-size:24px;font-weight:800;color:${c}">${v}</div>
        </div>`).join('')}
    </div>
    <div style="background:var(--sf2);border-radius:var(--rl);padding:14px;font-size:13px;color:var(--tx2);line-height:2">
      📌 전체 기관 <strong>${insts.length}개</strong> 중 A등급 <strong style="color:var(--g)">${gc.A}개</strong>, B등급 <strong style="color:var(--bl)">${gc.B}개</strong>, C등급 <strong style="color:var(--am)">${gc.C}개</strong>, D등급 <strong style="color:var(--rd)">${gc.D}개</strong><br>
      📌 교육 완료 기관 <strong>${eduSet}개</strong> / 전체 <strong>${insts.length}개</strong> (완료율 <strong>${eduRate}%</strong>)<br>
      📌 VOC 전체 <strong>${vocs.length}건</strong> — 처리완료 <strong>${doneVoc}건</strong> · 미처리 <strong style="color:var(--rd)">${pendVoc}건</strong>
    </div>`;

  // Grade dist
  const gEl=document.getElementById('report-grade');
  if(gEl)gEl.innerHTML=['A','B','C','D'].map(g=>{
    const c=gc[g],p=Math.round(c/Math.max(insts.length,1)*100);
    const col={A:'var(--g)',B:'var(--bl)',C:'var(--am)',D:'var(--rd)'}[g];
    return`<div style="margin:8px 0"><div style="display:flex;justify-content:space-between;font-size:12px;color:var(--tx2);margin-bottom:3px"><span style="font-weight:700;color:${col}">${gradeLabel[g]}</span><span>${c}개 (${p}%)</span></div><div style="background:var(--sf3);border-radius:3px;height:8px;overflow:hidden"><div style="width:${p}%;height:100%;background:${col};border-radius:3px;transition:width .6s"></div></div></div>`;
  }).join('');

  // VOC dist
  const vtEl=document.getElementById('report-voc-dist');
  const vtypes=['기능 개선','오류','데이터 활용 관련','기타'];
  const vcolors=['var(--pp)','var(--rd)','var(--bl)','var(--tx3)'];
  const vtot=Math.max(vocs.length,1);
  if(vtEl)vtEl.innerHTML=vtypes.map((t,i)=>{const c=vocs.filter(v=>v.type===t||v.type==='활용성'&&t==='데이터 활용 관련').length,p=Math.round(c/vtot*100);return`<div style="margin:8px 0"><div style="display:flex;justify-content:space-between;font-size:12px;color:var(--tx2);margin-bottom:3px"><span>${t}</span><span>${c}건 (${p}%)</span></div><div style="background:var(--sf3);border-radius:3px;height:8px;overflow:hidden"><div style="width:${p}%;height:100%;background:${vcolors[i]};border-radius:3px;transition:width .6s"></div></div></div>`;}).join('');

  // Trend (grade history)
  const tEl=document.getElementById('report-trend');
  if(tEl){
    // Count upgrades vs downgrades from gradeHistory
    const order={A:3,B:2,C:1,D:0};
    let upgrades=0,downgrades=0,stable=0;
    insts.forEach(i=>{
      const hist=i.gradeHistory||[];
      if(hist.length>=2){
        const prev=hist[hist.length-2].grade,cur=hist[hist.length-1].grade;
        if(order[cur]>order[prev])upgrades++;
        else if(order[cur]<order[prev])downgrades++;
        else stable++;
      }
    });
    tEl.innerHTML=`
      <div style="display:flex;gap:14px;margin-bottom:16px;flex-wrap:wrap">
        <div style="flex:1;min-width:120px;background:var(--gb);border:1px solid rgba(22,163,74,.2);border-radius:var(--rl);padding:14px;text-align:center"><div style="font-size:10px;color:var(--g);font-weight:700;margin-bottom:5px">⬆️ 등급 상승</div><div style="font-size:28px;font-weight:800;color:var(--g)">${upgrades}</div><div style="font-size:11px;color:var(--tx3)">개 기관</div></div>
        <div style="flex:1;min-width:120px;background:var(--sf2);border:1px solid var(--bd);border-radius:var(--rl);padding:14px;text-align:center"><div style="font-size:10px;color:var(--tx3);font-weight:700;margin-bottom:5px">➡️ 등급 유지</div><div style="font-size:28px;font-weight:800;color:var(--tx2)">${stable}</div><div style="font-size:11px;color:var(--tx3)">개 기관</div></div>
        <div style="flex:1;min-width:120px;background:var(--rdb);border:1px solid rgba(220,38,38,.2);border-radius:var(--rl);padding:14px;text-align:center"><div style="font-size:10px;color:var(--rd);font-weight:700;margin-bottom:5px">⬇️ 등급 하락</div><div style="font-size:28px;font-weight:800;color:var(--rd)">${downgrades}</div><div style="font-size:11px;color:var(--tx3)">개 기관</div></div>
      </div>
      <div style="font-size:12px;color:var(--tx3);background:var(--sf2);border-radius:var(--r);padding:10px 13px;line-height:1.8">
        ※ 가장 최근 2번의 등급 평가를 비교한 결과입니다. 체크리스트 평가를 완료한 기관 기준으로 산정됩니다.
      </div>`;
  }

  // Inst table
  const tbody=document.getElementById('report-inst-tbody');
  if(tbody)tbody.innerHTML=insts.slice(0,30).map(i=>{
    const vc=vocs.filter(v=>v.iid===i.id).length;
    const ec=edus.filter(e=>e.iid===i.id).length;
    const vs=visits.filter(v=>v.iid===i.id).sort((a,b)=>b.date.localeCompare(a.date));
    const lv=vs.length?fmt(vs[0].date):'—';
    return`<tr><td><span class="tl" onclick="openModal('${i.id}')">${i.name}</span></td><td>${gpHtml(i.grade,i.id)}</td><td>${i.region}</td><td>${i.res}</td><td style="color:${vc>=4?'var(--rd)':vc>=2?'var(--am)':'var(--tx)'}">${vc}</td><td>${ec}</td><td style="font-size:11px;color:var(--tx3)">${lv}</td><td>${i.hub==='Y'?'<span class="badge bg">Y</span>':'<span class="badge bn">N</span>'}</td></tr>`;
  }).join('');
}

/* ═══ BACKUP / RESTORE ═══ */
function backupData(){
  const json=JSON.stringify(DB,null,2);
  const a=document.createElement('a');
  a.href=URL.createObjectURL(new Blob([json],{type:'application/json'}));
  a.download=`storyline_crm_backup_${today()}.json`;
  a.click();
  toast('데이터 백업 완료','success');
}
function restoreData(event){
  const file=event.target.files[0];if(!file)return;
  const reader=new FileReader();
  reader.onload=function(e){
    try{
      const data=JSON.parse(e.target.result);
      if(!data.insts||!data.vocs){toast('유효하지 않은 백업 파일입니다','error');return;}
      DB=data;save();
      renderDash();
      closeSov('sov-backup');
      toast('데이터 복원 완료! 페이지를 새로고침합니다','success');
      setTimeout(()=>location.reload(),1500);
    }catch(err){toast('파일 파싱 오류: '+err.message,'error');}
  };
  reader.readAsText(file,'utf-8');
  event.target.value='';
}


/* ═══ EDU RATES PANEL ═══ */
const EDU_PROGRAMS=['시스템 등록교육','교사 이해 교육','4월 리포트 교육','90일 즐기기 교육 1','90일 즐기기 교육 2','부모교육','9월 리포트 교육','1월 리포트 교육'];
const EDU_COLORS=['#3B6FE8','#16A34A','#D97706','#7C3AED','#6D4AFF','#DC2626','#0891B2','#059669'];

function renderEduRatesPanel(){
  const el=document.getElementById('edu-rates-body');if(!el)return;
  const total=DB.insts.length;
  if(!total){el.innerHTML='<div class="empty">기관 데이터 없음</div>';return;}
  el.innerHTML=EDU_PROGRAMS.map((prog,i)=>{
    // count insts that have at least 1 edu record with this program as type
    const done=new Set(DB.edus.filter(e=>e.type===prog||e.topic?.includes(prog)).map(e=>e.iid)).size;
    const pct=Math.round(done/total*100);
    const col=EDU_COLORS[i%EDU_COLORS.length];
    return`<div style="margin-bottom:14px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:5px">
        <span style="font-size:13px;font-weight:600;color:var(--tx)">${prog}</span>
        <span style="font-size:13px;font-weight:800;color:${col}">${pct}%</span>
      </div>
      <div style="display:flex;align-items:center;gap:10px">
        <div style="flex:1;background:var(--sf3);border-radius:4px;height:10px;overflow:hidden">
          <div style="width:${pct}%;height:100%;background:${col};border-radius:4px;transition:width .7s cubic-bezier(.16,1,.3,1)"></div>
        </div>
        <span style="font-size:11px;color:var(--tx3);white-space:nowrap">${done}/${total}개 기관</span>
      </div>
    </div>`;
  }).join('');
}

/* ═══ CONSULT ONLY TAB ═══ */
function renderMConsultOnly(){
  const visits=DB.visits.filter(v=>v.iid===CUR&&v.type==='컨설팅').sort((a,b)=>b.date.localeCompare(a.date));
  const el=document.getElementById('m-consult-only');if(!el)return;
  if(!visits.length){
    el.innerHTML=`<div class="empty">컨설팅 기록이 없습니다<br><small style="color:var(--tx3)">'기록 통합' 탭 또는 상단 '+ 컨설팅 추가'에서 등록하세요</small></div>`;
    return;
  }
  el.innerHTML=visits.map((v,i)=>`
    <div class="tl-item">
      <div class="tl-g">
        <div class="tl-dot tl-dot-c"></div>
        ${i<visits.length-1?'<div class="tl-line"></div>':''}
      </div>
      <div class="tl-b">
        <div class="tl-m"><span class="badge bp" style="font-size:10px">컨설팅</span><span>${fmt(v.date)}</span></div>
        <div class="tl-tx">${v.content}</div>
        <button class="btn btn-xs btn-d" style="margin-top:6px" onclick="delVisit('${v.id}');renderMConsultOnly();renderMVisits()">삭제</button>
      </div>
    </div>`).join('');
}

/* ═══ GOOGLE CALENDAR ICS EXPORT ═══ */
function exportToGoogleCal(){
  const lines=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Storyline CRM//KR','CALSCALE:GREGORIAN','METHOD:PUBLISH'];
  DB.visits.forEach(v=>{
    const inst=DB.insts.find(i=>i.id===v.iid);
    const title=`[${v.type}] ${inst?inst.name:'기관'}`;
    const desc=v.content.replace(/\n/g,'\\n');
    const dt=v.date.replace(/-/g,'');
    const uid_str=`${dt}-${v.id}@storyline-crm`;
    lines.push('BEGIN:VEVENT');
    lines.push(`UID:${uid_str}`);
    lines.push(`DTSTART;VALUE=DATE:${dt}`);
    lines.push(`DTEND;VALUE=DATE:${dt}`);
    lines.push(`SUMMARY:${title}`);
    lines.push(`DESCRIPTION:${desc}`);
    if(inst)lines.push(`LOCATION:${inst.addr||inst.region||''}`);
    lines.push('END:VEVENT');
  });
  DB.edus.forEach(e=>{
    const inst=DB.insts.find(i=>i.id===e.iid);
    const title=`[교육] ${inst?inst.name:''} — ${e.topic||e.type}`;
    const dt=e.date.replace(/-/g,'');
    lines.push('BEGIN:VEVENT');
    lines.push(`UID:edu-${dt}-${e.id}@storyline-crm`);
    lines.push(`DTSTART;VALUE=DATE:${dt}`);
    lines.push(`DTEND;VALUE=DATE:${dt}`);
    lines.push(`SUMMARY:${title}`);
    lines.push('END:VEVENT');
  });
  lines.push('END:VCALENDAR');
  const ics=lines.join('\r\n');
  const a=document.createElement('a');
  a.href=URL.createObjectURL(new Blob([ics],{type:'text/calendar;charset=utf-8'}));
  a.download='storyline_schedule.ics';
  a.click();
  toast('ICS 파일 다운로드 완료! Google 캘린더에서 가져오기 해주세요.','success');
}

/* INIT */
// Set theme toggle icon on load
(function(){const btn=document.getElementById('theme-toggle');if(btn)btn.textContent=document.body.classList.contains('dark')?'☀️':'🌙';})();
// Set calendar to current month
CAL_DATE=new Date();
renderDash();
