/* ═══════════════════════════════════════
   DATA LAYER
═══════════════════════════════════════ */
const KEY='slcrm_v4';
function loadDB(){try{return JSON.parse(localStorage.getItem(KEY))||seed()}catch(e){return seed()}}
function save(){localStorage.setItem(KEY,JSON.stringify(DB))}
function uid(){return 'x'+(DB.seq++)+'_'+Date.now()}
function today(){return new Date().toISOString().slice(0,10)}
function fmt(d){return d?d.replace(/-/g,'.'):'—'}
function fmtM(d){return d?d.slice(0,7):''}
function mon(d){return d?parseInt(d.slice(5,7)):0}

function seed(){
  return{seq:1000,
    insts:[
      {id:'i1',name:'햇살어린이집',res:'홍길동',branch:'서울지사',region:'서울',addr:'서울시 강남구 역삼로 123',yr:3,dir:'김영숙',tel:'010-1234-5678',ages:['3','4','5'],feat:'원장 역량 매우 우수. 교사들의 앱 활용도 높음. 매주 월요일 교사회의에서 스토리라인 활용 사례를 공유하고 있음. 신규 기능 피드백 적극적.',hub:'Y',grade:'A',util:82,out:{dl:248,case:'매주 월요일 우리반 주간 앨범 활동으로 연결. 학부모 만족도 높음.',idea:'졸업 앨범 제작 시 스토리라인 활용 제안.',best:true}},
      {id:'i2',name:'별빛유치원',res:'김연구',branch:'경기지사',region:'경기',addr:'경기도 성남시 분당구 판교로 45',yr:2,dir:'박미영',tel:'010-2345-6789',ages:['3','4','5'],feat:'신규 기능 피드백 적극적. 학부모 만족도 높음. 공개수업 연계 활용.',hub:'Y',grade:'A',util:78,out:{dl:180,case:'월별 성장 앨범 제작.',idea:'교사 포트폴리오로 활용.',best:true}},
      {id:'i3',name:'예쁜나라유치원',res:'이담당',branch:'서울지사',region:'서울',addr:'서울시 서초구 서초대로 200',yr:1,dir:'최영희',tel:'010-3456-7890',ages:['3','4'],feat:'신규 기관. 교사 이직률 높음. 반복 교육 필요.',hub:'N',grade:'C',util:38,out:{dl:20,case:'',idea:'',best:false}},
      {id:'i4',name:'초록숲어린이집',res:'홍길동',branch:'경기지사',region:'경기',addr:'경기도 수원시 영통구 삼성로 88',yr:1,dir:'정수진',tel:'010-4567-8901',ages:['0','1','2'],feat:'영아 전담 기관. 사진 기록 위주 활용. 로딩 오류 민감.',hub:'N',grade:'D',util:19,out:{dl:15,case:'',idea:'',best:false}},
      {id:'i5',name:'하늘빛유치원',res:'김연구',branch:'서울지사',region:'인천',addr:'인천시 연수구 송도대로 15',yr:2,dir:'이하늘',tel:'010-5678-9012',ages:['3','4','5'],feat:'원장 관심 높음. 교사 역량 보통. 추가 교육 필요.',hub:'Y',grade:'B',util:62,out:{dl:90,case:'반별 주간 기록.',idea:'학부모 공유 기능 활용.',best:false}},
      {id:'i6',name:'사랑가득어린이집',res:'이담당',branch:'부산지사',region:'부산',addr:'부산시 해운대구 해운대로 300',yr:3,dir:'박사랑',tel:'010-6789-0123',ages:['1','2','3'],feat:'거점원 활동 우수. 지역 네트워크 형성 기여. 연간 활용 계획 수립.',hub:'Y',grade:'B',util:57,out:{dl:140,case:'연간 성장 기록집 제작.',idea:'지역 기관 연합 활용 사례 발표.',best:false}},
    ],
    visits:[
      {id:'v1',iid:'i1',date:'2025-06-05',type:'교육',content:'신규 교사 3명 대상 앱 기본 활용 교육. 사진 업로드 기능 집중 실습. 반응 매우 긍정적.'},
      {id:'v2',iid:'i1',date:'2025-05-20',type:'관리',content:'분기 정기 방문. 원장 면담. 활용 현황 점검 및 우수 사례 수집.'},
      {id:'v3',iid:'i1',date:'2025-04-15',type:'VOC 대응',content:'사진 반복 노출 VOC 현장 확인. 임시 해결책 안내. R&D팀 전달 완료.'},
      {id:'v4',iid:'i2',date:'2025-06-01',type:'교육',content:'교사 5명 심화 교육. 앨범 제작 기능 실습.'},
      {id:'v5',iid:'i3',date:'2025-03-10',type:'영업',content:'신규 기관 첫 방문. 기본 소개 및 시연 진행.'},
      {id:'v6',iid:'i5',date:'2025-05-15',type:'VOC 대응',content:'활동 불일치 VOC 현장 확인. 임시 해결책 안내 완료.'},
      {id:'v7',iid:'i6',date:'2025-06-03',type:'관리',content:'거점원 정기 관리 방문. 지역 네트워크 활동 협의.'},
    ],
    consults:[
      {id:'co1',iid:'i3',date:'2025-05-20',type:'기관 맞춤 컨설팅',content:'교사 이직 후 신규 교사 온보딩을 위한 맞춤 가이드 제공. 기본 기능 위주로 재설명.',response:'가이드 자료 내부 공유 완료. 다음 분기 재방문 예정.'},
      {id:'co2',iid:'i4',date:'2025-06-10',type:'이탈 방지 대응',content:'앱 로딩 오류 지속 민원에 대한 현장 대응. 기술팀 연계 후 즉시 처리.',response:'기술팀 서버 최적화 작업 완료. 2주 모니터링 예정.'},
      {id:'co3',iid:'i5',date:'2025-04-25',type:'활용 포인트 제안',content:'주간 앨범 활용 아이디어 3가지 제안. 교사들 긍정 반응.',response:'내부 우수사례 자료로 등록 완료.'},
    ],
    vocs:[
      {id:'vc1',iid:'i3',date:'2025-06-12',type:'기능 개선',content:'같은 사진이 반복해서 나와서 아이들이 지루해해요. 개선 부탁드립니다.',response:'R&D팀 전달 완료. 다음 업데이트 반영 예정.',status:'검토중'},
      {id:'vc2',iid:'i4',date:'2025-06-10',type:'오류',content:'앱 열 때마다 로딩이 3~4분 걸리는 경우 있음.',response:'서버 최적화 작업 완료. 정상 확인.',status:'처리완료'},
      {id:'vc3',iid:'i5',date:'2025-06-08',type:'활용성',content:'활동지와 앱 내용이 맞지 않는 경우가 있어요. 연계성 강화 요청.',response:'콘텐츠팀 전달. 검토 예정.',status:'검토중'},
      {id:'vc4',iid:'i3',date:'2025-05-20',type:'기능 개선',content:'연령별 콘텐츠 분류 기능 요청.',response:'',status:'미처리'},
      {id:'vc5',iid:'i4',date:'2025-05-15',type:'오류',content:'인쇄 기능에서 레이아웃 깨지는 현상.',response:'개발팀 확인 중.',status:'검토중'},
      {id:'vc6',iid:'i3',date:'2025-04-10',type:'기능 개선',content:'사진 업로드 용량 제한이 너무 작음. 원본 화질 업로드 요청.',response:'용량 상향 검토 중.',status:'미처리'},
      {id:'vc7',iid:'i6',date:'2025-04-05',type:'활용성',content:'UI가 복잡해서 교사들이 어려워함. 간소화 요청.',response:'UX팀 검토 예정.',status:'미처리'},
      {id:'vc8',iid:'i4',date:'2025-03-20',type:'기능 개선',content:'활동 사진 연계 활동 내용 자동 추천 기능 요청.',response:'기획팀 검토 예정.',status:'미처리'},
      {id:'vc9',iid:'i1',date:'2025-03-15',type:'활용성',content:'학부모 공유 링크가 자주 만료됨.',response:'링크 유효기간 연장 처리.',status:'처리완료'},
      {id:'vc10',iid:'i2',date:'2025-02-20',type:'오류',content:'영상 재생 속도가 느림.',response:'CDN 최적화 완료.',status:'처리완료'},
    ],
    edus:[
      {id:'e1',iid:'i1',date:'2025-06-05',type:'대면',cnt:1,need:'N',content:'신규 교사 3명 참여. 기본 기능 중심. 다음은 고급 기능 예정.'},
      {id:'e2',iid:'i1',date:'2025-03-10',type:'대면',cnt:1,need:'N',content:'전체 교사 8명 참여. 연간 계획 수립 연계 교육.'},
      {id:'e3',iid:'i2',date:'2025-06-01',type:'대면',cnt:1,need:'N',content:'교사 5명 심화 교육 완료.'},
      {id:'e4',iid:'i5',date:'2025-05-10',type:'비대면',cnt:1,need:'Y',content:'줌 비대면 교육. 일부 교사 미참여로 추가 교육 필요.'},
      {id:'e5',iid:'i6',date:'2025-05-20',type:'대면',cnt:2,need:'N',content:'거점원 역량 강화 교육. 사례 발표 연습 포함.'},
    ],
  };
}

let DB=loadDB();
let CUR=''; // current institution id in modal
let VOC_FILTER_IID=null; // VOC 탭 기관 필터
let IMP_ONLY=false; // 기능개선만 보기
let INST_P=1; const IPP=15;
let VOC_P=1; const VPP=15;
// Drill state: {level:'months'|'insts'|'detail', month:null|n, iid:null|str}
let DRILL={level:'months',month:null,iid:null};

/* ═══ HELPERS ═══ */
const gradeColor={A:'var(--g)',B:'var(--bl)',C:'var(--am)',D:'var(--rd)'};
const gradeBg={A:'var(--gb)',B:'var(--blb)',C:'var(--amb)',D:'var(--rdb)'};
const gradeLabel={A:'A 고활용',B:'B 안정운영',C:'C 활용지원',D:'D 집중대응'};
const gradeBanner={
  A:'✅ A 고활용 기관 — 거점원 발굴 및 사례 기록에 집중하세요.',
  B:'📊 B 안정운영 기관 — 이해도 향상 컨설팅 및 상위 전환 관리가 필요합니다.',
  C:'⚠️ C 활용지원 기관 — 월 1회 이상 방문하고 이탈 방지에 집중하세요.',
  D:'🚨 D 집중대응 기관 — 즉각 대응, 집중 모니터링이 필요합니다.',
};
const gradeClass={A:'rb-A',B:'rb-B',C:'rb-C',D:'rb-D'};

function utilGrade(u){
  if(u==null||u===''||isNaN(u))return'';
  const n=Number(u);
  if(n>=75)return'A';if(n>=50)return'B';if(n>=25)return'C';return'D';
}

function gpHtml(g){
  if(!g)return`<span class="gp gN">—</span>`;
  return`<span class="gp g${g}" title="${gradeLabel[g]||g}" onclick="openGradeInfo('${g}')">${g}</span>`;
}
function utilHtml(u,g){
  if(u==null||u===''||isNaN(u))return`<span style="color:var(--tx3)">—</span>`;
  return`<span class="gp g${g}" title="${gradeLabel[g]||''}: ${u}%" onclick="openUtilInfo('${g}')" style="width:auto;padding:0 7px;font-size:10px">${u}%</span>`;
}

function vtBadge(t){
  const m={교육:'bb',영업:'bg',VOC대응:'ba','VOC 대응':'ba',관리:'bn',기타:'bn'};
  return`<span class="badge ${m[t]||'bn'}" style="font-size:10px">${t}</span>`;
}
function vocTypeBadge(t){
  const m={'기능 개선':'bp',오류:'br',활용성:'bb',기타:'bn'};
  return`<span class="badge ${m[t]||'bn'}">${t}</span>`;
}
function statusBadge(s){
  const m={미처리:'br',검토중:'ba',처리완료:'bg'};
  return`<span class="badge ${m[s]||'bn'}">${s}</span>`;
}

/* ═══ NAV ═══ */
function nav(page,btn){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  document.querySelectorAll('.ni').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
  if(page==='dashboard')renderDash();
  if(page==='inst')renderInst();
  if(page==='voc')renderVoc();
  if(page==='hubs')renderHubs();
}

function goVocPage(filterIid,month){
  VOC_FILTER_IID=filterIid||null;
  if(month){DRILL={level:'insts',month,iid:null};}
  else if(filterIid){DRILL={level:'detail_all',month:null,iid:filterIid};}
  else{DRILL={level:'months',month:null,iid:null};}
  nav('voc',document.querySelectorAll('.ni')[2]);
}
function goInstFilter(field,val){
  nav('inst',document.querySelectorAll('.ni')[1]);
  setTimeout(()=>{
    if(field==='grade'){const el=document.getElementById('fi-grade');if(el)el.value=val;}
    renderInst();
  },50);
}

/* ═══ DASHBOARD ═══ */
function renderDash(){
  const now=new Date();
  document.getElementById('dash-date').textContent=now.toLocaleDateString('ko-KR',{year:'numeric',month:'long',day:'numeric',weekday:'short'});
  const insts=DB.insts,vocs=DB.vocs,edus=DB.edus;
  const pend=vocs.filter(v=>v.status==='미처리').length;
  // sidebar badge
  const pb=document.getElementById('voc-pending-badge');pb.textContent=pend;pb.style.display=pend>0?'':'none';

  // Grade counts
  const gc={A:0,B:0,C:0,D:0};
  insts.forEach(i=>{if(i.grade&&gc[i.grade]!==undefined)gc[i.grade]++;});
  ['A','B','C','D'].forEach(g=>{
    const el=document.getElementById('dc-'+g);
    if(el)el.querySelector('div:first-child').textContent=gc[g];
  });

  // Stat cards
  const hubs=insts.filter(i=>i.hub==='Y').length;
  const eduSet=new Set(edus.map(e=>e.iid)).size;
  const thisMon=now.getMonth()+1;
  const monVoc=vocs.filter(v=>mon(v.date)===thisMon).length;

  document.getElementById('dash-stats').innerHTML=`
    <div class="sc" style="background:var(--gb);border-color:rgba(52,201,122,.3);cursor:pointer" onclick="goInstFilter('grade','A')">
      <div class="sc-lb" style="color:var(--g)">A 고활용</div>
      <div class="sc-v" style="color:var(--g)">${gc.A}</div>
      <div class="sc-s" style="color:var(--g)">활용도 75%↑ · 클릭시 필터</div>
    </div>
    <div class="sc" style="background:var(--blb);border-color:rgba(96,165,250,.3);cursor:pointer" onclick="goInstFilter('grade','B')">
      <div class="sc-lb" style="color:var(--bl)">B 안정운영</div>
      <div class="sc-v" style="color:var(--bl)">${gc.B}</div>
      <div class="sc-s" style="color:var(--bl)">활용도 50~74% · 클릭시 필터</div>
    </div>
    <div class="sc" style="background:var(--amb);border-color:rgba(245,158,11,.3);cursor:pointer" onclick="goInstFilter('grade','C')">
      <div class="sc-lb" style="color:var(--am)">C 활용지원</div>
      <div class="sc-v" style="color:var(--am)">${gc.C}</div>
      <div class="sc-s" style="color:var(--am)">활용도 25~49% · 클릭시 필터</div>
    </div>
    <div class="sc" style="background:var(--rdb);border-color:rgba(240,82,82,.3);cursor:pointer" onclick="goInstFilter('grade','D')">
      <div class="sc-lb" style="color:var(--rd)">D 집중대응</div>
      <div class="sc-v" style="color:var(--rd)">${gc.D}</div>
      <div class="sc-s" style="color:var(--rd)">활용도 24%↓ · 클릭시 필터</div>
    </div>
    <div class="sc c-am clickable" onclick="goVocPage(null,null)">
      <div class="sc-lb">이달 VOC 누적</div><div class="sc-v c-am">${monVoc}</div>
      <div class="sc-s">미처리 <span class="trend t-dn">${pend}</span> · 전체 ${vocs.length}건</div>
    </div>
    <div class="sc c-pp">
      <div class="sc-lb">교육 완료율</div><div class="sc-v c-pp">${Math.round(eduSet/Math.max(insts.length,1)*100)}%</div>
      <div class="sc-s">${eduSet}개 기관 완료</div>
    </div>`;

  // VOC 유형 분포
  const types=['기능 개선','오류','활용성','기타'];
  const colors=['var(--pp)','var(--rd)','var(--bl)','var(--tx3)'];
  const tot=Math.max(vocs.length,1);
  document.getElementById('dash-voc-dist').innerHTML=types.map((t,i)=>{
    const c=vocs.filter(v=>v.type===t).length,p=Math.round(c/tot*100);
    return`<div class="bcr"><div class="bcr-l"><span>${t}</span><span>${c}건 (${p}%)</span></div><div class="bcr-t"><div class="bcr-f" style="width:${p}%;background:${colors[i]}"></div></div></div>`;
  }).join('');

  // Monthly chart (clickable)
  const months=['1','2','3','4','5','6','7','8','9','10','11','12'];
  const mc=new Array(12).fill(0);
  vocs.forEach(v=>{const m=mon(v.date);if(m>=1&&m<=12)mc[m-1]++;});
  const mx=Math.max(...mc,1);
  const curM=now.getMonth();
  document.getElementById('dash-monthly').innerHTML=`<div class="mc">${months.map((m,i)=>{
    const h=Math.max(Math.round(mc[i]/mx*64),4),isc=i===curM;
    return`<div class="mcc"><div class="mcb" style="height:${h}px;background:${isc?'var(--ac)':'var(--sf3)'}" onclick="goVocPage(null,${i+1})" title="${m}월 ${mc[i]}건 — 클릭시 VOC 탭"></div><div class="mcl" style="color:${isc?'var(--ac)':'var(--tx3)'};font-weight:${isc?700:400}">${m}</div></div>`;
  }).join('')}</div>`;

  // Hub candidates
  const cands=insts.filter(i=>{
    const vc=vocs.filter(v=>v.iid===i.id).length;
    const ed=edus.find(e=>e.iid===i.id);
    return (i.util||0)>=75&&vc<=2&&ed&&i.hub!=='Y';
  });
  const cel=document.getElementById('dash-cands');
  if(!cands.length){cel.innerHTML=`<tr><td colspan="6"><div class="empty">거점원 후보 조건 충족 기관 없음</div></td></tr>`;return;}
  cel.innerHTML=cands.map(i=>{
    const vc=vocs.filter(v=>v.iid===i.id).length;
    const ed=edus.find(e=>e.iid===i.id);
    return`<tr>
      <td><span class="tl" onclick="openModal('${i.id}')">${i.name}</span></td>
      <td>${i.region}</td>
      <td><span class="badge ${(i.util||0)>=75?'bg':'bb'}">${i.util||0}%</span></td>
      <td>${vc}</td><td>${ed?'✅':'❌'}</td>
      <td>${gpHtml('A')}</td>
    </tr>`;
  }).join('');
}

/* ═══ INSTITUTIONS ═══ */
function filteredInsts(){
  const q=(document.getElementById('fi-q')?.value||'').toLowerCase();
  const reg=document.getElementById('fi-region')?.value||'';
  const br=document.getElementById('fi-branch')?.value||'';
  const res=document.getElementById('fi-res')?.value||'';
  const yr=document.getElementById('fi-yr')?.value||'';
  const grade=document.getElementById('fi-grade')?.value||'';
  const eduPeriod=document.getElementById('fi-edu-period')?.value||'all';
  const eduStatus=document.getElementById('fi-edu-status')?.value||'';
  const vm=document.getElementById('fi-voc-month')?.value||'';
  // Compute cutoff date for edu period filter
  const now=new Date();
  const cutoff=eduPeriod==='all'?null:new Date(now.getFullYear(),now.getMonth()-parseInt(eduPeriod)+1,1);
  return DB.insts.filter(i=>{
    if(q&&!i.name.toLowerCase().includes(q)&&!i.dir.toLowerCase().includes(q))return false;
    if(reg&&i.region!==reg)return false;
    if(br&&i.branch!==br)return false;
    if(res&&i.res!==res)return false;
    if(yr&&String(i.yr)!==yr)return false;
    if(grade&&i.grade!==grade)return false;
    // Edu filter: check if inst has edu record within the period
    if(eduStatus){
      const edusInPeriod=DB.edus.filter(e=>{
        if(e.iid!==i.id)return false;
        if(!cutoff)return true; // 'all' period
        return e.date&&new Date(e.date)>=cutoff;
      });
      if(eduStatus==='done'&&edusInPeriod.length===0)return false;
      if(eduStatus==='none'&&edusInPeriod.length>0)return false;
    }
    if(vm){const hasVoc=DB.vocs.some(v=>v.iid===i.id&&mon(v.date)===parseInt(vm));if(!hasVoc)return false;}
    return true;
  });
}

function renderInst(){
  // populate researcher dropdown
  const resEl=document.getElementById('fi-res');
  const curRes=resEl?resEl.value:'';
  const resList=[...new Set(DB.insts.map(i=>i.res))].sort();
  if(resEl){resEl.innerHTML='<option value="">담당연구원 전체</option>'+resList.map(r=>`<option${r===curRes?' selected':''}>${r}</option>`).join('');}

  // populate VOC month dropdown
  const vmEl=document.getElementById('fi-voc-month');
  if(vmEl&&vmEl.options.length<=1){
    for(let m=1;m<=12;m++)vmEl.innerHTML+=`<option value="${m}">${m}월 VOC 있는 기관</option>`;
  }

  const all=filteredInsts();
  const total=all.length,pages=Math.max(1,Math.ceil(total/IPP));
  if(INST_P>pages)INST_P=1;
  const slice=all.slice((INST_P-1)*IPP,INST_P*IPP);

  const tbody=document.getElementById('inst-tbody');
  tbody.innerHTML=slice.length?slice.map(i=>{
    const vc=DB.vocs.filter(v=>v.iid===i.id).length;
    // Edu: check period filter to show badge correctly
    const eduPeriod=document.getElementById('fi-edu-period')?.value||'all';
    const now2=new Date();
    const cut=eduPeriod==='all'?null:new Date(now2.getFullYear(),now2.getMonth()-parseInt(eduPeriod)+1,1);
    const edInPeriod=DB.edus.filter(e=>e.iid===i.id&&(!cut||new Date(e.date)>=cut));
    const edAny=DB.edus.find(e=>e.iid===i.id);
    const vs=DB.visits.filter(v=>v.iid===i.id).sort((a,b)=>b.date.localeCompare(a.date));
    const lv=vs.length?fmt(vs[0].date):'—';
    const ug=utilGrade(i.util);
    const hubHtml=i.hub==='Y'?`<span class="badge bg">Y</span>`:`<span class="badge bn">N</span>`;
    const dirHtml=`<div class="dir-wrap">
      <button class="dir-btn" onclick="toggleDirDrop(event,'dd_${i.id}')">${i.dir} ▾</button>
      <div class="dir-drop" id="dd_${i.id}">
        <div class="dir-drop-name">${i.dir} 원장</div>
        <div class="dir-drop-tel">📞 ${i.tel||'—'}</div>
        <button class="dir-drop-copy" onclick="copyTel('${i.tel||''}','dd_${i.id}')">번호 복사</button>
      </div>
    </div>`;
    const eduBadge=eduPeriod==='all'
      ?(edAny?`<span class="badge bg" style="font-size:10px">✅ 완료</span>`:`<span class="badge br" style="font-size:10px">❌ 미진행</span>`)
      :(edInPeriod.length>0?`<span class="badge bg" style="font-size:10px">✅ ${eduPeriod}개월내</span>`:`<span class="badge ba" style="font-size:10px">📅 없음</span>`);
    return`<tr>
      <td><span class="tl" onclick="openModal('${i.id}')">${i.name}</span></td>
      <td>${gpHtml(i.grade)}</td>
      <td>${i.region}</td><td style="font-size:11px;color:var(--tx3)">${i.branch}</td>
      <td>${i.res}</td><td>${dirHtml}</td>
      <td>${hubHtml}</td>
      <td>${i.yr}년차</td>
      <td>${utilHtml(i.util,ug)}</td>
      <td style="color:${vc>=4?'var(--rd)':vc>=2?'var(--am)':'var(--tx)'};font-weight:700">${vc}</td>
      <td>${eduBadge}</td>
      <td style="font-size:11px;color:var(--tx3)">${lv}</td>
      <td style="display:flex;gap:4px">
        <button class="btn btn-xs btn-g" onclick="openModal('${i.id}')">상세</button>
        <button class="btn btn-xs btn-d" onclick="confirmDel('${i.id}')">삭제</button>
      </td>
    </tr>`;
  }).join(''):`<tr><td colspan="13"><div class="empty">조건에 맞는 기관이 없습니다</div></td></tr>`;

  document.getElementById('inst-pi').textContent=`총 ${total}개 · ${Math.min((INST_P-1)*IPP+1,total)}–${Math.min(INST_P*IPP,total)}`;
  renderPager('inst-pb',INST_P,pages,p=>{INST_P=p;renderInst()});
}

/* ═══ INSTITUTION MODAL ═══ */
function openModal(id){
  CUR=id;
  const i=DB.insts.find(x=>x.id===id);if(!i)return;
  document.getElementById('m-name').textContent=i.name;
  document.getElementById('m-sub').textContent=`${i.region} · ${i.branch} · 담당: ${i.res}`;

  const g=i.grade||'';
  document.getElementById('m-grade-badge').innerHTML=g?`<span class="badge" style="background:${gradeBg[g]};color:${gradeColor[g]}">${gradeLabel[g]||g}</span>`:'';
  document.getElementById('m-grade-banner').innerHTML=g?`<div class="rb ${gradeClass[g]}">${gradeBanner[g]}</div>`:'';

  const ug=utilGrade(i.util);
  document.getElementById('m-basic-grid').innerHTML=`
    <div class="ic"><div class="ik">원장명</div><div class="iv">${i.dir}</div></div>
    <div class="ic"><div class="ik">원장 전화</div><div class="iv">${i.tel}</div></div>
    <div class="ic"><div class="ik">관할 지사</div><div class="iv">${i.branch}</div></div>
    <div class="ic"><div class="ik">연차</div><div class="iv">${i.yr}년차</div></div>
    <div class="ic"><div class="ik">관리 등급</div><div class="iv">${gpHtml(g)} ${gradeLabel[g]||'미분류'}</div></div>
    <div class="ic"><div class="ik">데이터 활용도</div><div class="iv">${utilHtml(i.util,ug)} ${i.util!=null?i.util+'%':'—'}</div></div>
    <div class="ic"><div class="ik">거점원 여부</div><div class="iv">${i.hub==='Y'?'Y (거점원)':'N (비거점원)'}</div></div>
    <div class="ic"><div class="ik">사용 연령</div><div class="iv">${(i.ages||[]).map(a=>a+'세').join(', ')||'—'}</div></div>
    <div class="ic full"><div class="ik">주소</div><div class="iv">${i.addr}</div></div>`;
  document.getElementById('m-feat').textContent=i.feat||'(특징 정보 없음)';

  renderMVisits();renderMConsults();renderMCriteria();renderMVoc();renderMEdu();renderMOutput();

  document.querySelectorAll('.mt').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.mt')[0].classList.add('active');
  document.querySelectorAll('.tp').forEach(p=>p.classList.remove('active'));
  document.getElementById('mt-basic').classList.add('active');
  document.getElementById('inst-modal').classList.add('open');
}
function closeInstModal(){document.getElementById('inst-modal').classList.remove('open')}
function switchMT(btn,id){
  document.querySelectorAll('.mt').forEach(t=>t.classList.remove('active'));btn.classList.add('active');
  document.querySelectorAll('.tp').forEach(p=>p.classList.remove('active'));document.getElementById(id).classList.add('active');
}

/* ── MODAL: VISITS ── */
function renderMVisits(){
  const vs=DB.visits.filter(v=>v.iid===CUR).sort((a,b)=>b.date.localeCompare(a.date));
  const el=document.getElementById('m-visits');
  if(!vs.length){el.innerHTML=`<div class="empty">방문 기록이 없습니다</div>`;return;}
  el.innerHTML=vs.map((v,i)=>`
    <div class="tl-item">
      <div class="tl-g"><div class="tl-dot"></div>${i<vs.length-1?'<div class="tl-line"></div>':''}</div>
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

/* ── MODAL: CONSULTS ── */
function renderMConsults(){
  const cs=DB.consults.filter(c=>c.iid===CUR).sort((a,b)=>b.date.localeCompare(a.date));
  const el=document.getElementById('m-consults');
  if(!cs.length){el.innerHTML=`<div class="empty">컨설팅 기록이 없습니다</div>`;return;}
  el.innerHTML=cs.map(c=>`
    <div class="edu-card">
      <div style="display:flex;gap:7px;align-items:center;margin-bottom:7px">
        <span class="badge bb" style="font-size:10px">${c.type}</span>
        <span style="font-size:11px;color:var(--tx3)">${fmt(c.date)}</span>
      </div>
      <div style="font-size:13px;color:var(--tx2);line-height:1.6;margin-bottom:7px">${c.content}</div>
      ${c.response?`<div style="background:var(--sf3);border-radius:6px;padding:8px 11px;font-size:12px;color:var(--tx3)">📋 본사 대응: ${c.response}</div>`:''}
      <button class="btn btn-xs btn-d" style="margin-top:8px" onclick="delConsult('${c.id}')">삭제</button>
    </div>`).join('');
}
function openAddConsult(){document.getElementById('co-date').value=today();document.getElementById('co-content').value='';document.getElementById('co-response').value='';openSov('sov-consult')}
function saveConsult(){
  const c=document.getElementById('co-content').value.trim();
  if(!c){toast('컨설팅 내용을 입력해주세요','error');return}
  DB.consults.push({id:uid(),iid:CUR,date:document.getElementById('co-date').value,type:document.getElementById('co-type').value,content:c,response:document.getElementById('co-response').value.trim()});
  save();closeSov('sov-consult');renderMConsults();toast('컨설팅 기록 저장','success');
}
function delConsult(id){DB.consults=DB.consults.filter(c=>c.id!==id);save();renderMConsults();}

/* ── MODAL: CRITERIA (관리 유형 체크리스트) ── */
const CRITERIA_DATA={
  A:{label:'A 고활용 기관',color:'var(--g)',items:['✅ 우수 활용 사례 문서화','✅ 교사·학부모 반응 수집','✅ 거점원 가능성 체크 완료','✅ 개선 요구사항 파악','✅ 거점원 후보 등록 여부 확인','✅ 리퍼럴 기관 태깅 시도','✅ 사례 내부 공유 완료']},
  B:{label:'B 안정운영 기관',color:'var(--bl)',items:['📊 잘 안 쓰는 이유 파악','📊 이해도 부족 지점 확인','📊 적용 어려움 파악','📊 맞춤 컨설팅 제공 여부','📊 활용 포인트 1~2개 제안 완료','📊 상위군 전환 후보 체크','📊 내부 공유 완료']},
  C:{label:'C 활용지원 기관',color:'var(--am)',items:['⚠️ 미사용 이유 파악','⚠️ 어려운 기능 특정','⚠️ 쉬운 가이드 제공 완료','⚠️ 재교육 일정 수립','⚠️ 최소 사용 항목 설정','⚠️ 이탈 방지 케어 실행','⚠️ 내부 공유 완료']},
  D:{label:'D 집중대응 기관',color:'var(--rd)',items:['🚨 불편·불만 사항 전수 파악','🚨 이슈 유형 기록 완료','🚨 2차 이내 후속조치 실행','🚨 집중 모니터링 진행 중','🚨 개입 포인트 확정','🚨 신속 1차 응대 완료','🚨 내부 공유 완료']},
};
function renderMCriteria(){
  const i=DB.insts.find(x=>x.id===CUR);if(!i)return;
  const g=i.grade;
  const el=document.getElementById('m-criteria-content');
  if(!g){el.innerHTML=`<div class="empty">기관 등급이 설정되지 않았습니다.<br>기본 정보에서 등급을 먼저 설정해주세요.</div>`;return;}
  const d=CRITERIA_DATA[g];
  el.innerHTML=`
    <div style="background:${gradeBg[g]};border:1px solid ${gradeColor[g]}40;border-radius:var(--rl);padding:13px 15px;margin-bottom:14px">
      <div style="font-size:13px;font-weight:700;color:${gradeColor[g]}">${d.label} 세부 대응 기준 체크리스트</div>
      <div style="font-size:11px;color:var(--tx3);margin-top:3px">이번 방문에서 확인/이행한 항목을 체크하세요</div>
    </div>
    ${d.items.map((item,idx)=>`
      <div style="display:flex;align-items:flex-start;gap:10px;padding:10px 0;border-bottom:1px solid var(--bd)">
        <input type="checkbox" id="cr${idx}" style="width:15px;height:15px;margin-top:1px;accent-color:${gradeColor[g]};flex-shrink:0">
        <label for="cr${idx}" style="font-size:13px;color:var(--tx2);cursor:pointer;line-height:1.4">${item}</label>
      </div>`).join('')}
    <button class="btn btn-g btn-sm" style="margin-top:14px" onclick="saveCriteriaToVisit()">📋 체크 완료 항목을 방문기록으로 저장</button>`;
}
function saveCriteriaToVisit(){
  const i=DB.insts.find(x=>x.id===CUR);if(!i||!i.grade)return;
  const d=CRITERIA_DATA[i.grade];
  const checked=d.items.filter((_,idx)=>document.getElementById('cr'+idx)?.checked);
  if(!checked.length){toast('체크된 항목이 없습니다','error');return;}
  const content=`[관리유형 체크리스트 - ${d.label}]\n${checked.join('\n')}`;
  DB.visits.push({id:uid(),iid:CUR,date:today(),type:'관리',content});
  save();renderMVisits();
  document.querySelectorAll('[id^="cr"]').forEach(el=>el.checked=false);
  toast('체크 항목이 방문기록으로 저장되었습니다','success');
}

/* ── MODAL: VOC ── */
function renderMVoc(){
  const vocs=DB.vocs.filter(v=>v.iid===CUR).sort((a,b)=>b.date.localeCompare(a.date));
  document.getElementById('m-voc-title').textContent=`VOC 내역 (총 ${vocs.length}건)`;
  const tbody=document.getElementById('m-voc-tbody');
  tbody.innerHTML=vocs.length?vocs.map(v=>`<tr>
    <td style="font-size:11px;color:var(--tx3);white-space:nowrap">${fmt(v.date)}</td>
    <td>${vocTypeBadge(v.type)}</td>
    <td style="font-size:12px;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--tx2)" title="${v.content}">${v.content}</td>
    <td style="font-size:11px;color:var(--tx3);max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${v.response||''}">${v.response||'—'}</td>
    <td>${statusBadge(v.status)}</td>
    <td><button class="btn btn-xs btn-d" onclick="delVocM('${v.id}')">삭제</button></td>
  </tr>`).join(''):`<tr><td colspan="6"><div class="empty">VOC 기록 없음</div></td></tr>`;
}
function delVocM(id){DB.vocs=DB.vocs.filter(v=>v.id!==id);save();renderMVoc();renderDash();}

/* ── MODAL: EDU ── */
function renderMEdu(){
  const es=DB.edus.filter(e=>e.iid===CUR).sort((a,b)=>b.date.localeCompare(a.date));
  const el=document.getElementById('m-edu-list');
  if(!es.length){el.innerHTML=`<div class="empty">교육 기록이 없습니다</div>`;return;}
  el.innerHTML=es.map(e=>`
    <div class="edu-card">
      <div style="display:flex;gap:7px;align-items:center;margin-bottom:6px">
        <span class="badge bb" style="font-size:10px">${e.type}</span>
        <span style="font-size:11px;color:var(--tx3)">${fmt(e.date)}</span>
        <span style="font-size:11px;color:var(--tx3)">${e.cnt}회</span>
        ${e.need==='Y'?'<span class="badge ba" style="font-size:10px">추가교육 필요</span>':''}
      </div>
      <div style="font-size:13px;color:var(--tx2);line-height:1.6">${e.content||'—'}</div>
      <button class="btn btn-xs btn-d" style="margin-top:7px" onclick="delEdu('${e.id}')">삭제</button>
    </div>`).join('');
}
function openAddEdu(){document.getElementById('edu-date').value=today();document.getElementById('edu-content').value='';openSov('sov-edu')}
function saveEdu(){
  const d=document.getElementById('edu-date').value;
  if(!d){toast('교육 일자를 입력해주세요','error');return}
  DB.edus.push({id:uid(),iid:CUR,date:d,type:document.getElementById('edu-type').value,cnt:parseInt(document.getElementById('edu-cnt').value)||1,need:document.getElementById('edu-need').value,content:document.getElementById('edu-content').value.trim()});
  save();closeSov('sov-edu');renderMEdu();toast('교육 기록 저장','success');
}
function delEdu(id){DB.edus=DB.edus.filter(e=>e.id!==id);save();renderMEdu();}

/* ── MODAL: OUTPUT ── */
function renderMOutput(){
  const i=DB.insts.find(x=>x.id===CUR);if(!i)return;
  const o=i.out||{};
  document.getElementById('m-output').innerHTML=`
    <div class="ig">
      <div class="ic"><div class="ik">다운로드 수</div><div class="iv" style="font-size:22px;font-weight:800">${o.dl||0}회</div></div>
      <div class="ic"><div class="ik">우수 사례</div><div class="iv">${o.best?'⭐ 우수 기관':'—'}</div></div>
      <div class="ic full"><div class="ik">활용 사례</div><div class="iv" style="font-size:13px;color:var(--tx2);line-height:1.7;white-space:pre-wrap;margin-top:4px">${o.case||'(미입력)'}</div></div>
      <div class="ic full"><div class="ik">활용 아이디어</div><div class="iv" style="font-size:13px;color:var(--tx2);line-height:1.7;white-space:pre-wrap;margin-top:4px">${o.idea||'(미입력)'}</div></div>
    </div>`;
}
function openEditOutput(){
  const i=DB.insts.find(x=>x.id===CUR);if(!i)return;
  const o=i.out||{};
  document.getElementById('out-dl').value=o.dl||0;
  document.getElementById('out-case').value=o.case||'';
  document.getElementById('out-idea').value=o.idea||'';
  document.getElementById('out-best').checked=o.best||false;
  openSov('sov-output');
}
function saveOutput(){
  const i=DB.insts.find(x=>x.id===CUR);if(!i)return;
  i.out={dl:parseInt(document.getElementById('out-dl').value)||0,case:document.getElementById('out-case').value.trim(),idea:document.getElementById('out-idea').value.trim(),best:document.getElementById('out-best').checked};
  save();closeSov('sov-output');renderMOutput();toast('Output 정보 저장','success');
}

/* ═══ INST CRUD ═══ */
function openAddInst(){
  document.getElementById('sov-inst-title').textContent='기관 추가';
  document.getElementById('ei-id').value='';
  ['ei-name','ei-res','ei-addr','ei-dir','ei-tel','ei-feat'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('ei-util').value='';
  document.querySelectorAll('.age-cb').forEach(c=>c.checked=false);
  document.getElementById('ei-grade').value='';
  document.getElementById('ei-hub').value='N';
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
  document.getElementById('ei-grade').value=i.grade||'';
  document.getElementById('ei-util').value=i.util!=null?i.util:'';
  document.querySelectorAll('.age-cb').forEach(c=>c.checked=(i.ages||[]).includes(c.value));
  document.getElementById('ei-feat').value=i.feat||'';
  openSov('sov-inst');
}
function saveInst(){
  const name=document.getElementById('ei-name').value.trim(),res=document.getElementById('ei-res').value.trim();
  if(!name||!res){toast('기관명과 담당연구원은 필수입니다','error');return}
  const ages=Array.from(document.querySelectorAll('.age-cb:checked')).map(c=>c.value);
  const utilVal=document.getElementById('ei-util').value;
  const editId=document.getElementById('ei-id').value;
  const data={name,res,branch:document.getElementById('ei-branch').value,region:document.getElementById('ei-region').value,addr:document.getElementById('ei-addr').value.trim(),dir:document.getElementById('ei-dir').value.trim(),tel:document.getElementById('ei-tel').value.trim(),yr:parseInt(document.getElementById('ei-yr').value),hub:document.getElementById('ei-hub').value,grade:document.getElementById('ei-grade').value,util:utilVal!==''?parseInt(utilVal):null,ages,feat:document.getElementById('ei-feat').value.trim()};
  if(editId){const idx=DB.insts.findIndex(x=>x.id===editId);if(idx>=0){data.id=editId;data.out=DB.insts[idx].out;DB.insts[idx]=data;}}
  else{data.id=uid();data.out={dl:0,case:'',idea:'',best:false};DB.insts.push(data);}
  save();closeSov('sov-inst');renderInst();renderDash();
  if(editId)openModal(editId);
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
  DB.consults=DB.consults.filter(c=>c.iid!==id);
  save();closeInstModal();renderInst();renderDash();toast('기관 삭제 완료');
}

/* ═══ GRADE/UTIL INFO POPUPS ═══ */
function openGradeInfo(g){
  const info={
    A:'A 고활용 기관\n\n데이터 활용도: 75% 이상\n컴플레인 수: 최근 3개월 0~1건\n현장 체크 점수: 20~25점\n\n전략: 관계 유지, 거점원 발굴, 리퍼럴',
    B:'B 안정운영 기관\n\n데이터 활용도: 50~74%\n컴플레인 수: 최근 3개월 2~3건\n현장 체크 점수: 15~19점\n\n전략: 관계 형성, 이해도 향상, 컨설팅',
    C:'C 활용지원 기관\n\n데이터 활용도: 25~49%\n컴플레인 수: 최근 3개월 4~5건\n현장 체크 점수: 10~14점\n\n전략: 신뢰 형성, 컨설팅, 중간 이탈 방지',
    D:'D 집중대응 기관\n\n데이터 활용도: 24% 이하\n컴플레인 수: 6건 이상 또는 클레임이슈\n현장 체크 점수: 9점 이하 또는 현장반응 악화\n\n전략: 이탈 방지, 신뢰 형성, 불만 완화',
  };
  openUtilInfo(g);
}
function openUtilInfo(g){
  const body={
    A:`<div style="background:var(--gb);border:1px solid rgba(52,201,122,.3);border-radius:var(--r);padding:14px;margin-bottom:12px"><div style="font-size:14px;font-weight:800;color:var(--g);margin-bottom:8px">A 고활용 기관</div><div style="font-size:12px;color:var(--tx2);line-height:1.9">• 데이터 활용도: <strong>75% 이상</strong><br>• 컴플레인 수: 최근 3개월 <strong>0~1건</strong><br>• 현장 체크: <strong>20~25점</strong><br>• 방문 주기: 분기별 1~2회<br>• 대응: 거점원 발굴, 리퍼럴, 리텐션</div></div>`,
    B:`<div style="background:var(--blb);border:1px solid rgba(96,165,250,.3);border-radius:var(--r);padding:14px;margin-bottom:12px"><div style="font-size:14px;font-weight:800;color:var(--bl);margin-bottom:8px">B 안정운영 기관</div><div style="font-size:12px;color:var(--tx2);line-height:1.9">• 데이터 활용도: <strong>50~74%</strong><br>• 컴플레인 수: <strong>2~3건</strong><br>• 현장 체크: <strong>15~19점</strong><br>• 방문 주기: 격월 1~2회<br>• 대응: 관계 형성, 이해도 향상, 컨설팅</div></div>`,
    C:`<div style="background:var(--amb);border:1px solid rgba(245,158,11,.3);border-radius:var(--r);padding:14px;margin-bottom:12px"><div style="font-size:14px;font-weight:800;color:var(--am);margin-bottom:8px">C 활용지원 기관</div><div style="font-size:12px;color:var(--tx2);line-height:1.9">• 데이터 활용도: <strong>25~49%</strong><br>• 컴플레인 수: <strong>4~5건</strong><br>• 현장 체크: <strong>10~14점</strong><br>• 방문 주기: 월 1회 이상<br>• 대응: 신뢰 형성, 이탈 방지, 컨설팅</div></div>`,
    D:`<div style="background:var(--rdb);border:1px solid rgba(240,82,82,.3);border-radius:var(--r);padding:14px;margin-bottom:12px"><div style="font-size:14px;font-weight:800;color:var(--rd);margin-bottom:8px">D 집중대응 기관</div><div style="font-size:12px;color:var(--tx2);line-height:1.9">• 데이터 활용도: <strong>24% 이하</strong><br>• 컴플레인 수: <strong>6건 이상 / 클레임이슈</strong><br>• 현장 체크: <strong>9점 이하 / 반응 악화</strong><br>• 방문 주기: 월 1~2회 이상<br>• 대응: 이탈 방지, 집중 모니터링</div></div>`,
  };
  document.getElementById('sov-util-title').textContent='데이터 활용도 / 관리 등급 기준';
  document.getElementById('sov-util-body').innerHTML=body[g]||'<div class="empty">정보 없음</div>';
  openSov('sov-util-info');
}

/* ═══ VOC PAGE ═══ */
function renderVoc(){
  const vocs=DB.vocs;
  const pend=vocs.filter(v=>v.status==='미처리').length;
  const pb=document.getElementById('voc-pending-badge');pb.textContent=pend;pb.style.display=pend>0?'':'none';

  document.getElementById('voc-stats').innerHTML=`
    <div class="sc"><div class="sc-lb">전체 VOC</div><div class="sc-v">${vocs.length}</div></div>
    <div class="sc c-pp"><div class="sc-lb">기능 개선 요청</div><div class="sc-v c-pp">${vocs.filter(v=>v.type==='기능 개선').length}</div><div class="sc-s">R&D 전달 필요</div></div>
    <div class="sc c-rd"><div class="sc-lb">오류 신고</div><div class="sc-v c-rd">${vocs.filter(v=>v.type==='오류').length}</div></div>
    <div class="sc c-am"><div class="sc-lb">미처리 VOC</div><div class="sc-v c-am">${pend}</div></div>`;

  renderVocDrill();
  renderVocTypeDist();
  renderVocKw();
  renderVocTop();
  renderVocList();

  // inst filter label
  if(VOC_FILTER_IID){
    const inst=DB.insts.find(i=>i.id===VOC_FILTER_IID);
    document.getElementById('voc-filter-inst-label').textContent=inst?`📍 ${inst.name} 필터 중`:'';
    document.getElementById('voc-clear-filter').style.display='';
  } else {
    document.getElementById('voc-filter-inst-label').textContent='';
    document.getElementById('voc-clear-filter').style.display='none';
  }
}

function clearVocInstFilter(){VOC_FILTER_IID=null;DRILL={level:'months',month:null,iid:null};renderVoc();}

/* VOC 드릴다운 */
function renderVocDrill(){
  renderVocBc();
  const el=document.getElementById('voc-drill-chart');
  const tel=document.getElementById('voc-drill-table');

  if(DRILL.level==='months'||DRILL.level==='detail_all'){
    // Monthly bar chart
    const months=['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];
    const mc=new Array(12).fill(0);
    DB.vocs.forEach(v=>{const m=mon(v.date);if(m>=1&&m<=12)mc[m-1]++;});
    const mx=Math.max(...mc,1);
    const curM=new Date().getMonth();
    el.innerHTML=`<div class="mc">${months.map((m,i)=>{
      const h=Math.max(Math.round(mc[i]/mx*64),4),isc=i===curM;
      return`<div class="mcc"><div class="mcb" style="height:${h}px;background:${isc?'var(--ac)':mc[i]>0?'var(--sf3)':'var(--sf2)'}" onclick="drillToMonth(${i+1})" title="${m} ${mc[i]}건 클릭"></div><div class="mcl" style="color:${isc?'var(--ac)':'var(--tx3)'}">${m}</div></div>`;
    }).join('')}</div><div style="font-size:11px;color:var(--tx3);text-align:center;margin-top:8px">막대 클릭 → 해당 월 기관별 상세 보기</div>`;

    if(DRILL.level==='detail_all'&&DRILL.iid){
      // show all VOCs for specific inst
      showInstVocs(DRILL.iid);
    } else {
      tel.innerHTML='';
    }
  } else if(DRILL.level==='insts'){
    // Show inst breakdown for selected month
    const m=DRILL.month;
    const monthVocs=DB.vocs.filter(v=>mon(v.date)===m);
    el.innerHTML=`<div style="font-size:12px;color:var(--tx2);margin-bottom:10px">📅 ${m}월 VOC — 기관을 클릭하면 세부 내용을 볼 수 있습니다</div>`;
    const byInst=DB.insts.map(i=>({i,vocs:monthVocs.filter(v=>v.iid===i.id)})).filter(x=>x.vocs.length>0);
    if(!byInst.length){tel.innerHTML=`<div class="empty">${m}월 VOC 기록 없음</div>`;return;}
    const mx2=Math.max(...byInst.map(x=>x.vocs.length),1);
    el.innerHTML+=`<div style="margin-bottom:12px">${byInst.map(x=>{
      const p=Math.round(x.vocs.length/mx2*100);
      return`<div class="bcr" onclick="drillToInst('${x.i.id}')" style="cursor:pointer"><div class="bcr-l"><span class="tl">${x.i.name}</span><span>${x.vocs.length}건</span></div><div class="bcr-t"><div class="bcr-f" style="width:${p}%;background:var(--am)"></div></div></div>`;
    }).join('')}</div>`;
    tel.innerHTML=`<div style="font-size:11px;color:var(--tx3)">기관명 또는 막대 클릭 → 세부 VOC 내용 보기</div>`;
  } else if(DRILL.level==='detail'){
    el.innerHTML='';
    showInstVocs(DRILL.iid);
  }
}

function showInstVocs(iid){
  const inst=DB.insts.find(i=>i.id===iid);
  const m=DRILL.month;
  let vocs=DB.vocs.filter(v=>v.iid===iid);
  if(m)vocs=vocs.filter(v=>mon(v.date)===m);
  vocs.sort((a,b)=>b.date.localeCompare(a.date));
  const tel=document.getElementById('voc-drill-table');
  tel.innerHTML=`
    <div style="font-size:12px;font-weight:600;color:var(--tx2);margin-bottom:10px">${inst?inst.name:'기관'} ${m?m+'월 ':''} VOC 세부 내용 (${vocs.length}건)</div>
    ${vocs.length?`<div class="tw"><table>
      <thead><tr><th>등록일</th><th>유형</th><th>내용</th><th>본사 대응</th><th>상태</th></tr></thead>
      <tbody>${vocs.map(v=>`<tr>
        <td style="font-size:11px;color:var(--tx3);white-space:nowrap">${fmt(v.date)}</td>
        <td>${vocTypeBadge(v.type)}</td>
        <td style="font-size:12px;color:var(--tx2)">${v.content}</td>
        <td style="font-size:11px;color:var(--tx3);max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${v.response||''}">${v.response||'—'}</td>
        <td>${statusBadge(v.status)}</td>
      </tr>`).join('')}</tbody>
    </table></div>`:'<div class="empty">해당 VOC 없음</div>'}`;
}

function drillToMonth(m){DRILL={level:'insts',month:m,iid:null};renderVocBc();renderVocDrill();}
function drillToInst(iid){DRILL={level:'detail',month:DRILL.month,iid};renderVocBc();renderVocDrill();}
function drillReset(){DRILL={level:'months',month:null,iid:null};VOC_FILTER_IID=null;renderVocBc();renderVocDrill();}
function drillBack(level,m){DRILL={level,month:m||null,iid:null};renderVocBc();renderVocDrill();}

function renderVocBc(){
  const el=document.getElementById('voc-bc');
  let html=`<span class="bc-link" onclick="drillReset()">전체</span>`;
  if(DRILL.month){
    html+=`<span class="bc-sep"> › </span><span class="bc-link" onclick="drillBack('insts',${DRILL.month})">${DRILL.month}월</span>`;
  }
  if(DRILL.level==='detail'&&DRILL.iid){
    const inst=DB.insts.find(i=>i.id===DRILL.iid);
    html+=`<span class="bc-sep"> › </span><span style="color:var(--tx2)">${inst?inst.name:'기관'}</span>`;
  }
  if(DRILL.level==='detail_all'&&DRILL.iid){
    const inst=DB.insts.find(i=>i.id===DRILL.iid);
    html+=`<span class="bc-sep"> › </span><span style="color:var(--tx2)">${inst?inst.name+' 전체':''}</span>`;
  }
  el.innerHTML=`<div class="bc">${html}</div>`;
}

/* VOC 유형 분포 (with period filter) */
function renderVocTypeDist(){
  const period=document.getElementById('voc-type-period')?.value||'all';
  const vocs=period==='all'?DB.vocs:DB.vocs.filter(v=>mon(v.date)===parseInt(period));
  const types=['기능 개선','오류','활용성','기타'];
  const colors=['var(--pp)','var(--rd)','var(--bl)','var(--tx3)'];
  const tot=Math.max(vocs.length,1);
  document.getElementById('voc-type-chart').innerHTML=types.map((t,i)=>{
    const c=vocs.filter(v=>v.type===t).length,p=Math.round(c/tot*100);
    return`<div class="bcr"><div class="bcr-l"><span>${t}</span><span>${c}건 (${p}%)</span></div><div class="bcr-t"><div class="bcr-f" style="width:${p}%;background:${colors[i]}"></div></div></div>`;
  }).join('');
}

/* VOC Top 10 (with period filter) */
function renderVocTop(){
  const period=document.getElementById('voc-top-period')?.value||'all';
  const vocs=period==='all'?DB.vocs:DB.vocs.filter(v=>mon(v.date)===parseInt(period));
  const top=DB.insts.map(i=>({name:i.name,id:i.id,c:vocs.filter(v=>v.iid===i.id).length})).filter(x=>x.c>0).sort((a,b)=>b.c-a.c).slice(0,10);
  const mx=Math.max(...top.map(x=>x.c),1);
  document.getElementById('voc-top').innerHTML=top.length?top.map(x=>{
    const p=Math.round(x.c/mx*100);
    const col=x.c>=5?'var(--rd)':x.c>=3?'var(--am)':'var(--g)';
    return`<div class="bcr" style="cursor:pointer" onclick="goVocInstFilter('${x.id}')"><div class="bcr-l"><span class="tl">${x.name}</span><span>${x.c}건</span></div><div class="bcr-t"><div class="bcr-f" style="width:${p}%;background:${col}"></div></div></div>`;
  }).join(''):`<div class="empty">데이터 없음</div>`;
}

function goVocInstFilter(iid){
  DRILL={level:'detail_all',month:null,iid};
  VOC_FILTER_IID=iid;
  renderVocDrill();
  renderVocBc();
  renderVocList();
  const inst=DB.insts.find(i=>i.id===iid);
  document.getElementById('voc-filter-inst-label').textContent=inst?`📍 ${inst.name} 필터 중`:'';
  document.getElementById('voc-clear-filter').style.display='';
}

/* VOC 키워드 */
function renderVocKw(){
  const allText=DB.vocs.map(v=>v.content).join(' ');
  const kws=extractKW(allText);
  const kwColors=[['var(--ppb)','var(--pp)'],['var(--blb)','var(--bl)'],['var(--rdb)','var(--rd)'],['var(--gb)','var(--g)'],['var(--amb)','var(--am)']];
  const el=document.getElementById('voc-kw');
  el.innerHTML=kws.length?`<div style="display:flex;flex-wrap:wrap;gap:7px">${kws.map((k,i)=>{
    const[bg,cl]=kwColors[i%5],s=Math.max(11,Math.min(15,11+k[1]));
    return`<span style="padding:4px 12px;border-radius:20px;background:${bg};color:${cl};font-size:${s}px;font-weight:600;cursor:default">${k[0]} <strong>${k[1]}</strong></span>`;
  }).join('')}</div>`:`<div class="empty">데이터가 부족합니다</div>`;
}

/* VOC 목록 */
function filteredVocs(){
  const q=(document.getElementById('voc-q')?.value||'').toLowerCase();
  const tf=document.getElementById('voc-f-type')?.value||'';
  const sf=document.getElementById('voc-f-status')?.value||'';
  return DB.vocs.filter(v=>{
    const inst=DB.insts.find(i=>i.id===v.iid);
    const n=inst?inst.name:'';
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
  const tbody=document.getElementById('voc-tbody');
  tbody.innerHTML=slice.length?slice.map(v=>{
    const inst=DB.insts.find(i=>i.id===v.iid);
    const n=inst?inst.name:'(삭제된 기관)';
    return`<tr>
      <td style="font-size:11px;color:var(--tx3);white-space:nowrap">${fmt(v.date)}</td>
      <td><span class="tl" onclick="openModal('${v.iid}')">${n}</span></td>
      <td>${vocTypeBadge(v.type)}</td>
      <td style="font-size:12px;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--tx2)" title="${v.content}">${v.content}</td>
      <td style="font-size:11px;color:var(--tx3);max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${v.response||''}">${v.response||'—'}</td>
      <td>${statusBadge(v.status)}</td>
      <td><button class="btn btn-xs btn-d" onclick="delVocPage('${v.id}')">삭제</button></td>
    </tr>`;
  }).join(''):`<tr><td colspan="7"><div class="empty">VOC 기록이 없습니다</div></td></tr>`;
  document.getElementById('voc-pi').textContent=`총 ${total}건`;
  renderPager('voc-pb',VOC_P,pages,p=>{VOC_P=p;renderVocList()});
}

function toggleImpFilter(){
  IMP_ONLY=!IMP_ONLY;
  const btn=document.getElementById('btn-imp-filter');
  btn.style.background=IMP_ONLY?'var(--ppb)':'';
  btn.style.color=IMP_ONLY?'var(--pp)':'';
  renderVocList();
}

function openAddVoc(iid){
  const sel=document.getElementById('voc-inst-sel');
  sel.innerHTML=DB.insts.map(i=>`<option value="${i.id}">${i.name}</option>`).join('');
  if(iid)sel.value=iid;
  document.getElementById('voc-date').value=today();
  document.getElementById('voc-content').value='';
  document.getElementById('voc-response').value='';
  document.getElementById('voc-type-sel').value='기능 개선';
  document.getElementById('voc-status-sel').value='미처리';
  openSov('sov-voc');
}
function saveVoc(){
  const c=document.getElementById('voc-content').value.trim();
  if(!c){toast('VOC 내용을 입력해주세요','error');return}
  DB.vocs.push({id:uid(),iid:document.getElementById('voc-inst-sel').value,date:document.getElementById('voc-date').value,type:document.getElementById('voc-type-sel').value,status:document.getElementById('voc-status-sel').value,content:c,response:document.getElementById('voc-response').value.trim()});
  save();closeSov('sov-voc');renderVoc();renderDash();renderMVoc();toast('VOC 등록 완료','success');
}
function delVocPage(id){DB.vocs=DB.vocs.filter(v=>v.id!==id);save();renderVoc();renderDash();}

/* ═══ HUBS PAGE ═══ */
const HUB_CL=[
  {label:'담당자 태도 및 협조도',desc:'질문 및 응답 태도 / 미팅 참여도 / 후속 협조 의사',scaleL:'비협조',scaleR:'협조'},
  {label:'시스템 이해도',desc:'핵심 기능과 데이터 의미를 이해하는 수준',scaleL:'낮음',scaleR:'높음'},
  {label:'실제 활용 의지',desc:'교육 후 활용 의향, 다음 액션 활용 의지',scaleL:'낮음',scaleR:'높음'},
  {label:'현장 반응 온도',desc:'교직원 반응, 불신/불편/방어적 반응 여부',scaleL:'부정적',scaleR:'우호적'},
  {label:'후속 관리 필요도',desc:'추가 방문, 재교육, 불만 대응 필요 수준',scaleL:'매우 높음',scaleR:'낮음'},
];

function renderHubs(){
  const hubs=DB.insts.filter(i=>i.hub==='Y');
  const cA=hubs.filter(i=>i.grade==='A').length,cB=hubs.filter(i=>i.grade==='B').length,cC=hubs.filter(i=>i.grade==='C').length,cD=hubs.filter(i=>i.grade==='D').length;
  document.getElementById('hub-stats').innerHTML=`
    <div class="sc"><div class="sc-lb">전체 거점원</div><div class="sc-v">${hubs.length}</div></div>
    <div class="sc c-g"><div class="sc-lb">A 등급</div><div class="sc-v c-g">${cA}</div></div>
    <div class="sc c-bl" style="--sc-v-color:var(--bl)"><div class="sc-lb">B 등급</div><div class="sc-v" style="color:var(--bl)">${cB}</div></div>
    <div class="sc c-am"><div class="sc-lb">C 등급</div><div class="sc-v c-am">${cC}</div></div>`;

  // Hub inst selector
  const sel=document.getElementById('hub-inst-sel');
  const curVal=sel.value;
  sel.innerHTML='<option value="">-- 기관을 선택하세요 --</option>'+DB.insts.map(i=>`<option value="${i.id}">${i.name}</option>`).join('');
  if(curVal){sel.value=curVal;renderHubPreview(curVal);}
  else{const pv=document.getElementById('hub-preview-card');if(pv){pv.classList.remove('show');pv.innerHTML='';}}

  // Checklist area
  document.getElementById('hub-checklist-area').innerHTML=HUB_CL.map((cl,i)=>`
    <div class="cl-slider-row">
      <div class="cls-label">
        <span>${i+1}. ${cl.label}</span>
        <span class="cls-val" id="hcv${i}">3</span>
      </div>
      <div class="cls-desc">${cl.desc}</div>
      <div class="cls-track">
        <span style="font-size:10px;color:var(--tx3)">${cl.scaleL}</span>
        <input type="range" min="1" max="5" value="3" id="hc${i}" oninput="updateHubScore()">
        <span style="font-size:10px;color:var(--tx3)">${cl.scaleR}</span>
        <span class="cls-val" id="hcvv${i}">3점</span>
      </div>
    </div>`).join('');
  updateHubScore();

  // Grade dist chart
  const t=Math.max(hubs.length,1);
  document.getElementById('hub-grade-dist').innerHTML=[['A 고활용',cA,'var(--g)'],['B 안정운영',cB,'var(--bl)'],['C 활용지원',cC,'var(--am)'],['D 집중대응',cD,'var(--rd)']].map(([l,c,col])=>{
    const p=Math.round(c/t*100);
    return`<div class="bcr"><div class="bcr-l"><span>${l}</span><span>${c}개 (${p}%)</span></div><div class="bcr-t"><div class="bcr-f" style="width:${p}%;background:${col}"></div></div></div>`;
  }).join('');

  // Hub table
  const tbody=document.getElementById('hub-tbody');
  if(!hubs.length){tbody.innerHTML=`<tr><td colspan="9"><div class="empty">거점원 기관 없음</div></td></tr>`;return;}
  tbody.innerHTML=hubs.map(i=>{
    const vc=DB.vocs.filter(v=>v.iid===i.id).length;
    const ed=DB.edus.filter(e=>e.iid===i.id);
    const dl=i.out?i.out.dl||0:0;
    const ul=dl>=200?['높음','bg']:dl>=80?['보통','bb']:['낮음','ba'];
    const cand=dl>=80&&vc<=2&&ed.length>0;
    return`<tr>
      <td><span class="tl" onclick="openModal('${i.id}')">${i.name}</span></td>
      <td>${i.region}</td>
      <td style="font-size:11px;color:var(--tx3)">${i.branch}</td>
      <td>
        <div class="ph-tip">
          <span class="tl">${i.dir}</span>
          <div class="ph-pop">📞 ${i.tel||'—'}</div>
        </div>
      </td>
      <td>${gpHtml(i.grade)}</td>
      <td><span class="tl" onclick="goVocPage('${i.id}',null)">${vc}</span></td>
      <td><span class="tl" onclick="showEduHist('${i.id}')">${ed.length>0?'✅ '+ed.length+'건':'❌'}</span></td>
      <td><span class="badge ${ul[1]}">${ul[0]}</span></td>
      <td>${cand?'<span class="badge bp">⭐ 후보</span>':'—'}</td>
    </tr>`;
  }).join('');
}

function updateHubScore(){
  let total=0;
  for(let i=0;i<5;i++){
    const v=parseInt(document.getElementById('hc'+i)?.value||3);
    total+=v;
    const vel=document.getElementById('hcvv'+i);if(vel)vel.textContent=v+'점';
    const vel2=document.getElementById('hcv'+i);if(vel2)vel2.textContent=v;
  }
  const numEl=document.getElementById('hub-score-num');
  const grEl=document.getElementById('hub-score-grade');
  const dsEl=document.getElementById('hub-score-desc');
  numEl.textContent=total+'점';
  if(total>=20){numEl.style.color='var(--g)';grEl.style.color='var(--g)';grEl.textContent='A 등급 — 고활용 기관';dsEl.textContent='분기별 1~2회 · 거점원 발굴 및 리텐션 집중';}
  else if(total>=15){numEl.style.color='var(--bl)';grEl.style.color='var(--bl)';grEl.textContent='B 등급 — 안정운영 기관';dsEl.textContent='격월 1~2회 · 관계 형성 및 이해도 향상';}
  else if(total>=10){numEl.style.color='var(--am)';grEl.style.color='var(--am)';grEl.textContent='C 등급 — 활용지원 기관';dsEl.textContent='월 1회 이상 · 신뢰 형성 및 이탈 방지';}
  else{numEl.style.color='var(--rd)';grEl.style.color='var(--rd)';grEl.textContent='D 등급 — 집중대응 기관';dsEl.textContent='월 1~2회 이상 · 즉각 대응 및 집중 모니터링';}
}

function applyHubChecklist(){
  const iid=document.getElementById('hub-inst-sel').value;
  if(!iid){toast('기관을 선택해주세요','error');return}
  let total=0;
  const scores=[];
  for(let i=0;i<5;i++){const v=parseInt(document.getElementById('hc'+i)?.value||3);total+=v;scores.push(v);}
  const grade=total>=20?'A':total>=15?'B':total>=10?'C':'D';
  const inst=DB.insts.find(x=>x.id===iid);if(!inst)return;
  inst.hub='Y';inst.grade=grade;
  // Save visit record with checklist scores
  const scoreText=HUB_CL.map((cl,i)=>`${cl.label}: ${scores[i]}점`).join(', ');
  DB.visits.push({id:uid(),iid,date:today(),type:'관리',content:`[방문 체크리스트 평가] 총점 ${total}점 → ${gradeLabel[grade]} 등급 산정\n${scoreText}`});
  save();renderHubs();toast(`${inst.name} → ${gradeLabel[grade]} 거점원으로 반영되었습니다`,'success');
}

function showEduHist(iid){
  const inst=DB.insts.find(i=>i.id===iid);if(!inst)return;
  const es=DB.edus.filter(e=>e.iid===iid).sort((a,b)=>b.date.localeCompare(a.date));
  document.getElementById('sov-edu-title').textContent=`${inst.name} 교육 이력`;
  document.getElementById('sov-edu-body').innerHTML=es.length?es.map(e=>`
    <div class="edu-card">
      <div style="display:flex;gap:7px;align-items:center;margin-bottom:6px">
        <span class="badge bb" style="font-size:10px">${e.type}</span>
        <span style="font-size:11px;color:var(--tx3)">${fmt(e.date)}</span>
        <span style="font-size:11px;color:var(--tx3)">${e.cnt}회</span>
        ${e.need==='Y'?'<span class="badge ba" style="font-size:10px">추가교육 필요</span>':''}
      </div>
      <div style="font-size:13px;color:var(--tx2);line-height:1.6">${e.content||'—'}</div>
    </div>`).join(''):`<div class="empty">교육 이력 없음</div>`;
  openSov('sov-edu-hist');
}

/* ═══ KEYWORD EXTRACTION ═══ */
function extractKW(text){
  const predef=['사진 반복','활동 불일치','로딩 오류','연령 맞춤','콘텐츠 부족','UI 개선','인쇄 기능','업로드 오류','용량 제한','자동 추천','화질 문제','링크 만료','재생 속도'];
  const counts={};
  predef.forEach(k=>{const c=(text.match(new RegExp(k,'gi'))||[]).length;if(c>0)counts[k]=c;});
  const words=text.match(/[가-힣]{2,5}/g)||[];
  const skip=new Set(['있어요','요청','기능','경우','교사','활용','기관','내용','부탁','드립','니다','합니다','있습','하는','합니','해요','아요','어요','되어','에서','에는','으로','부분','현상','문제','때마','이유','수준','이상','이하']);
  words.forEach(w=>{if(!skip.has(w)&&w.length>=2){counts[w]=(counts[w]||0)+1;}});
  return Object.entries(counts).filter(([,v])=>v>0).sort((a,b)=>b[1]-a[1]).slice(0,12);
}

/* ═══ CSV EXPORT ═══ */
function exportCSV(){
  const insts=filteredInsts();
  const rows=[['기관명','담당연구원','지사','지역','원장명','연락처','연차','관리등급','활용도','거점원','VOC건수','교육여부'],
    ...insts.map(i=>{
      const vc=DB.vocs.filter(v=>v.iid===i.id).length;
      const ed=DB.edus.find(e=>e.iid===i.id);
      return[i.name,i.res,i.branch,i.region,i.dir,i.tel,i.yr+'년차',i.grade||'미분류',(i.util!=null?i.util+'%':'—'),i.hub,vc,ed?'완료':'미진행'];
    })];
  const csv='\uFEFF'+rows.map(r=>r.map(c=>`"${String(c).replace(/"/g,'""')}"`).join(',')).join('\n');
  const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));
  a.download=`기관목록_${today()}.csv`;a.click();
  toast('CSV 파일이 다운로드되었습니다','success');
}

/* ═══ MODAL UTILS ═══ */
function openSov(id){document.getElementById(id).classList.add('open')}
function closeSov(id){document.getElementById(id).classList.remove('open')}
function closeConf(){document.getElementById('conf-ov').classList.remove('open')}

document.querySelectorAll('.sov').forEach(el=>el.addEventListener('click',e=>{if(e.target===el)el.classList.remove('open')}));
document.getElementById('inst-modal').addEventListener('click',e=>{if(e.target===document.getElementById('inst-modal'))closeInstModal()});
document.getElementById('conf-ov').addEventListener('click',e=>{if(e.target===document.getElementById('conf-ov'))closeConf()});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    closeInstModal();
    document.querySelectorAll('.sov.open').forEach(el=>el.classList.remove('open'));
    closeConf();
  }
});

/* ═══ PAGER ═══ */
function renderPager(elId,cur,total,cb){
  const el=document.getElementById(elId);let h='';
  if(cur>1)h+=`<button class="pgb" onclick="(${cb.toString()})(${cur-1})">‹</button>`;
  for(let p=Math.max(1,cur-2);p<=Math.min(total,cur+2);p++)
    h+=`<button class="pgb${p===cur?' active':''}" onclick="(${cb.toString()})(${p})">${p}</button>`;
  if(cur<total)h+=`<button class="pgb" onclick="(${cb.toString()})(${cur+1})">›</button>`;
  el.innerHTML=h;
}

/* ═══ TOAST ═══ */
function toast(msg,type='info'){
  const el=document.createElement('div');
  el.className=`toast toast-${type}`;el.textContent=msg;
  document.getElementById('toasts').appendChild(el);
  requestAnimationFrame(()=>requestAnimationFrame(()=>el.classList.add('show')));
  setTimeout(()=>{el.classList.remove('show');setTimeout(()=>el.remove(),350)},2800);
}


/* ═══ PHONE DROPDOWN ═══ */
function toggleDirDrop(e,id){
  e.stopPropagation();
  const el=document.getElementById(id);
  // close others
  document.querySelectorAll('.dir-drop.show').forEach(d=>{if(d.id!==id)d.classList.remove('show');});
  el.classList.toggle('show');
}
function copyTel(tel,dropId){
  if(!tel){alert('전화번호 정보가 없습니다');return;}
  navigator.clipboard.writeText(tel).then(()=>{
    toast('전화번호가 복사되었습니다','success');
    const el=document.getElementById(dropId);if(el)el.classList.remove('show');
  }).catch(()=>{
    // fallback
    const ta=document.createElement('textarea');ta.value=tel;document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);
    toast('전화번호가 복사되었습니다','success');
    const el=document.getElementById(dropId);if(el)el.classList.remove('show');
  });
}
// Close all dropdowns when clicking outside
document.addEventListener('click',()=>{document.querySelectorAll('.dir-drop.show').forEach(d=>d.classList.remove('show'));});

/* ═══ HUB PREVIEW CARD ═══ */
function renderHubPreview(iid){
  const card=document.getElementById('hub-preview-card');
  if(!iid){card.classList.remove('show');card.innerHTML='';return;}
  const inst=DB.insts.find(i=>i.id===iid);
  if(!inst){card.classList.remove('show');return;}
  const vocs=DB.vocs.filter(v=>v.iid===iid).sort((a,b)=>b.date.localeCompare(a.date));
  const edus=DB.edus.filter(e=>e.iid===iid).sort((a,b)=>b.date.localeCompare(a.date));
  const visits=DB.visits.filter(v=>v.iid===iid).sort((a,b)=>b.date.localeCompare(a.date));
  const ug=utilGrade(inst.util);
  const gradeC=gradeColor[inst.grade]||'var(--tx3)';
  const gradeBG=gradeBg[inst.grade]||'var(--sf3)';

  const recentVocs=vocs.slice(0,3);
  const recentEdus=edus.slice(0,3);
  const recentVisits=visits.slice(0,3);

  const vocTypeB={'기능 개선':'bp','오류':'br','활용성':'bb','기타':'bn'};
  const stB={'미처리':'br','검토중':'ba','처리완료':'bg'};

  card.innerHTML=`
    <div class="hpv-header">
      <div>
        <div class="hpv-name">${inst.name}</div>
        <div style="font-size:11px;color:var(--tx3);margin-top:2px">${inst.region} · ${inst.branch}</div>
      </div>
      <div class="hpv-grade" style="background:${gradeBG};color:${gradeC}">${inst.grade||'—'}</div>
    </div>

    <div class="hpv-grid">
      <div class="hpv-cell"><div class="hpv-cell-k">담당 연구원</div><div class="hpv-cell-v">${inst.res}</div></div>
      <div class="hpv-cell"><div class="hpv-cell-k">원장 / 전화</div><div class="hpv-cell-v">${inst.dir} <span style="color:var(--ac);font-size:11px">${inst.tel||''}</span></div></div>
      <div class="hpv-cell"><div class="hpv-cell-k">데이터 활용도</div><div class="hpv-cell-v">${inst.util!=null?inst.util+'%':'—'} <span style="font-size:10px;color:${gradeC}">(${gradeLabel[ug]||''})</span></div></div>
      <div class="hpv-cell"><div class="hpv-cell-k">누적 VOC</div><div class="hpv-cell-v" style="color:${vocs.length>=4?'var(--rd)':vocs.length>=2?'var(--am)':'var(--g)'}">${vocs.length}건</div></div>
    </div>

    <div class="hpv-section">
      <div class="hpv-sec-title">최근 VOC (${Math.min(recentVocs.length,3)}건)</div>
      ${recentVocs.length?recentVocs.map(v=>`
        <div class="hpv-item">
          <span class="hpv-item-date">${fmt(v.date)}</span>
          <span><span class="badge ${vocTypeB[v.type]||'bn'}" style="font-size:10px;margin-right:4px">${v.type}</span>${v.content.length>40?v.content.slice(0,40)+'…':v.content}</span>
        </div>`).join(''):`<div style="font-size:12px;color:var(--tx3);padding:6px 0">VOC 기록 없음</div>`}
    </div>

    <div class="hpv-section">
      <div class="hpv-sec-title">최근 교육 이력 (${Math.min(recentEdus.length,3)}건)</div>
      ${recentEdus.length?recentEdus.map(e=>`
        <div class="hpv-item">
          <span class="hpv-item-date">${fmt(e.date)}</span>
          <span><span class="badge bb" style="font-size:10px;margin-right:4px">${e.type}</span>${e.cnt}회 ${e.content?'· '+e.content.slice(0,35):''}</span>
        </div>`).join(''):`<div style="font-size:12px;color:var(--tx3);padding:6px 0">교육 이력 없음</div>`}
    </div>

    <div class="hpv-section">
      <div class="hpv-sec-title">최근 방문 기록 (${Math.min(recentVisits.length,3)}건)</div>
      ${recentVisits.length?recentVisits.map(v=>`
        <div class="hpv-item">
          <span class="hpv-item-date">${fmt(v.date)}</span>
          <span><span class="badge bn" style="font-size:10px;margin-right:4px">${v.type}</span>${v.content.length>45?v.content.slice(0,45)+'…':v.content}</span>
        </div>`).join(''):`<div style="font-size:12px;color:var(--tx3);padding:6px 0">방문 기록 없음</div>`}
    </div>

    <div class="hpv-actions">
      <button class="btn btn-sm" style="background:var(--ppb);color:var(--pp);border:1px solid rgba(167,139,250,.25)" onclick="goVocPage('${iid}',null);closeSov('sov-edu-hist')">VOC 보기 (${vocs.length}건)</button>
      <button class="btn btn-sm" style="background:var(--blb);color:var(--bl);border:1px solid rgba(96,165,250,.25)" onclick="showEduHist('${iid}')">교육 이력 보기 (${edus.length}건)</button>
      <button class="btn btn-p btn-sm" onclick="openModal('${iid}')">기관 상세 보기</button>
    </div>`;
  card.classList.add('show');
}

/* ═══ INIT ═══ */
renderDash();