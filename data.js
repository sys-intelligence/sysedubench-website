window.SEB_DATA = {

  paper: {
    title: "LLMs Know More Than They Can Build: Evaluating LLMs on Building Computing Systems by Coursework",
    tagline: "LLMs score higher on systems exams than on systems labs — revealing a persistent gap between knowing and building.",
    abstract: "We present SysEduBench, a benchmark that evaluates LLMs on system-building capabilities through university-level course materials. SysExam evaluates conceptual understanding through 194 exam questions; SysLab evaluates implementation ability through 49 lab tasks graded by the courses' official autograders. We find a consistent gap across all models: they perform better on exams than on labs, with gaps ranging from under 2 percentage points (Claude Sonnet 4.6) to over 22 percentage points (GPT-5.2). SysEduBench is also an open platform for instructors to examine course materials in the AI era.",
    authors: ["Anonymous"],
    venue: "",
    arxiv_url: "",
    github: "https://github.com/sys-intelligence/sysedubench-website",
  },

  overview: {
    sysexam: { questions: 194, exams: 10, domains: 4 },
    syslab:  { tasks: 49, courses: 7, institutions: 5 },
  },

  // Key headline numbers for hero
  headlines: [
    { value: "194",   label: "Exam questions" },
    { value: "49",    label: "Lab tasks" },
    { value: "7",     label: "Courses" },
    { value: "≤22pp", label: "Max know–build gap" },
  ],

  // The four domains
  domains: [
    { id:"os",   name:"Operating Systems",      color:"#2952a3", courses:["MIT 6.1810","PKU OS","UIUC CS 423"], exam_qs:73,  lab_tasks:14, lang:"C",    institutions:["PKU","MIT","UIUC"] },
    { id:"dist", name:"Distributed Systems",    color:"#166534", courses:["MIT 6.5840","SBU CSE535"],           exam_qs:36,  lab_tasks:18, lang:"Go",   institutions:["MIT","SBU"] },
    { id:"intro",name:"Intro to Systems",       color:"#7c3aed", courses:["SFU CMPT 201","UIUC CS 341","UWisc"],exam_qs:79,  lab_tasks:14, lang:"C/C++",institutions:["SFU","UIUC","UWisc"] },
    { id:"db",   name:"Database Systems",       color:"#92400e", courses:["UChicago CMSC 23500"],               exam_qs:6,   lab_tasks:3,  lang:"C",    institutions:["UChicago"] },
  ],

  // Overall exam vs lab results (Table 2)
  overall_results: [
    { model:"Claude Sonnet 4.6", org:"Anthropic", exam:82.9, exam_ci:4.4, lab:81.0, lab_ci:14.0,
      by_domain:{ os:{exam:84,lab:60}, dist:{exam:96,lab:87}, intro:{exam:86,lab:93}, db:{exam:71,lab:89} } },
    { model:"GPT-5.2",           org:"OpenAI",   exam:80.7, exam_ci:5.0, lab:58.5, lab_ci:23.3,
      by_domain:{ os:{exam:73,lab:31}, dist:{exam:81,lab:65}, intro:{exam:82,lab:90}, db:{exam:89,lab:0} } },
    { model:"Claude Haiku 4.5",  org:"Anthropic", exam:72.0, exam_ci:5.0, lab:49.0, lab_ci:21.5,
      by_domain:{ os:{exam:71,lab:29}, dist:{exam:77,lab:54}, intro:{exam:79,lab:74}, db:{exam:63,lab:0} } },
    { model:"GPT-5 Mini",        org:"OpenAI",   exam:58.1, exam_ci:5.6, lab:53.1, lab_ci:23.3,
      by_domain:{ os:{exam:69,lab:40}, dist:{exam:67,lab:41}, intro:{exam:64,lab:90}, db:{exam:33,lab:11} } },
  ],

  // ── SYSLAB ──────────────────────────────────────────────────────────────
  courses: [
    {
      id: "uiuc_cs341",
      name: "UIUC CS 341",
      full_name: "Systems Programming",
      domain: "intro",
      institution: "University of Illinois at Urbana-Champaign",
      year: 2025,
      language: "C",
      has_results: true,
      tasks: [
        { id:"mp1", name:"Extreme Edge Cases",  short:"Edge Cases",  topics:"TDD · String manipulation",      max_points:21 },
        { id:"mp2", name:"Vector",              short:"Vector",      topics:"Dynamic arrays · malloc/free",    max_points:40 },
        { id:"mp3", name:"Shell",               short:"Shell",       topics:"Fork · Exec · Signals",          max_points:29 },
        { id:"mp4", name:"Malloc",              short:"Malloc",      topics:"Allocator · Boundary tagging",   max_points:12 },
        { id:"mp5", name:"Password Cracker",    short:"Pwd Cracker", topics:"Multithreading · Performance",   max_points:31 },
        { id:"mp6", name:"Parallel Make",       short:"Par. Make",   topics:"Dep. graphs · Concurrency",     max_points:41 },
        { id:"mp7", name:"Finding Filesystems", short:"Filesystems", topics:"Minix FS · Inodes · Blocks",    max_points:16 },
        { id:"mp8", name:"Nonstop Networking",  short:"Networking",  topics:"TCP sockets · Protocols",        max_points:96 },
      ],
      tiers: [
        {
          id:"student", label:"Student friendly",
          desc:"Lumen (UIUC) free-access models · 200 max turns · 3 runs per task · scorer errors excluded from heatmap",
          models:[
            { id:"qwen3-35b-a3b-s",   name:"Qwen3.6-35b-a3b",          org:"Lumen (UIUC)", harness:"ReAct",
              n:3, mean_score:0.56, task_success:0.375, avg_turns:80, avg_tokens:null,
              per_task:{mp1:1.00, mp2:1.00, mp3:0.72, mp4:0.08, mp5:null, mp6:null, mp7:null, mp8:null} },
            { id:"gemma-4-31b-s",     name:"Gemma-4-31b-it",            org:"Lumen (UIUC)", harness:"ReAct",
              n:3, mean_score:0.72, task_success:0.375, avg_turns:21, avg_tokens:null,
              per_task:{mp1:null, mp2:1.00, mp3:0.38, mp4:0.86, mp5:0.64, mp6:null, mp7:null, mp8:null} },
            { id:"qwen3-coder-s",     name:"Qwen3-Coder-Next",          org:"Lumen (UIUC)", harness:"ReAct",
              n:3, mean_score:0.42, task_success:0.000, avg_turns:96, avg_tokens:null,
              per_task:{mp1:0.62, mp2:null, mp3:0.70, mp4:0.04, mp5:0.31, mp6:null, mp7:null, mp8:null} },
            { id:"nemotron-s",        name:"Nemotron-3-Super-120b-a12b", org:"Lumen (UIUC)", harness:"ReAct",
              n:3, mean_score:0.34, task_success:0.125, avg_turns:30, avg_tokens:null,
              per_task:{mp1:0.05, mp2:0.93, mp3:0.17, mp4:0.25, mp5:0.30, mp6:null, mp7:null, mp8:null} },
          ]
        },
        {
          id:"common", label:"Common resources",
          desc:"Models & budgets realistically available to students · 100 max turns · 3 runs per task",
          models:[
            { id:"claude-sonnet-46", name:"Claude Sonnet 4.6", org:"Anthropic", harness:"ReAct",
              n:24, mean_score:0.790, task_success:0.750, avg_turns:99.5, avg_tokens:138190,
              per_task:{mp1:1.00,mp2:1.00,mp3:0.88,mp4:0.94,mp5:1.00,mp6:0.98,mp7:1.00,mp8:0.85} },
            { id:"cc-sonnet-46",     name:"Claude Sonnet 4.6", org:"Anthropic", harness:"Claude Code",
              n:26, mean_score:0.640, task_success:0.625, avg_turns:42.6, avg_tokens:26170,
              per_task:{mp1:1.00,mp2:0.94,mp3:0.33,mp4:0.30,mp5:0.06,mp6:0.07,mp7:1.00,mp8:0.90} },
            { id:"gpt-52",           name:"GPT-5.2",           org:"OpenAI",   harness:"ReAct",
              n:24, mean_score:0.610, task_success:0.500, avg_turns:29.4, avg_tokens:30640,
              per_task:{mp1:1.00,mp2:1.00,mp3:1.00,mp4:0.72,mp5:0.80,mp6:0.00,mp7:1.00,mp8:0.10} },
            { id:"claude-haiku-45",  name:"Claude Haiku 4.5",  org:"Anthropic", harness:"ReAct",
              n:24, mean_score:0.502, task_success:0.375, avg_turns:98.8, avg_tokens:26016,
              per_task:{mp1:1.00,mp2:1.00,mp3:0.67,mp4:0.39,mp5:0.16,mp6:0.01,mp7:1.00,mp8:0.40} },
            { id:"gpt-54-mini",      name:"GPT-5.4-mini",      org:"OpenAI",   harness:"ReAct",
              n:24, mean_score:0.470, task_success:0.375, avg_turns:22.4, avg_tokens:22437,
              per_task:{mp1:0.75,mp2:0.90,mp3:0.75,mp4:0.61,mp5:0.97,mp6:0.55,mp7:0.34,mp8:0.10} },
            { id:"cc-sonnet-45",     name:"Claude Sonnet 4.5", org:"Anthropic", harness:"Claude Code",
              n:24, mean_score:0.208, task_success:0.250, avg_turns:24.0, avg_tokens:3301,
              per_task:{mp1:0.33,mp2:0.44,mp3:0.30,mp4:0.00,mp5:0.07,mp6:1.00,mp7:0.90,mp8:0.00} },
          ]
        },
        {
          id:"rich", label:"Resource rich",
          desc:"Frontier models · 200 max turns · 3 runs per task · MSR runs",
          models:[
            { id:"gpt-55",           name:"GPT-5.5",       org:"OpenAI", harness:"ReAct",
              n:24, mean_score:0.987, task_success:0.875, avg_turns:51.2, avg_tokens:331123,
              per_task:{mp1:1.00,mp2:1.00,mp3:1.00,mp4:1.00,mp5:0.98,mp6:1.00,mp7:1.00,mp8:0.75} },
            { id:"gpt-54",           name:"GPT-5.4",       org:"OpenAI", harness:"ReAct",
              n:24, mean_score:0.810, task_success:0.750, avg_turns:47.0, avg_tokens:225750,
              per_task:{mp1:1.00,mp2:1.00,mp3:0.99,mp4:1.00,mp5:0.07,mp6:1.00,mp7:1.00,mp8:0.34} },
            { id:"gpt-54-mini-rich", name:"GPT-5.4-mini",  org:"OpenAI", harness:"ReAct",
              n:24, mean_score:0.770, task_success:0.875, avg_turns:67.6, avg_tokens:256462,
              per_task:{mp1:1.00,mp2:1.00,mp3:1.00,mp4:1.00,mp5:0.97,mp6:1.00,mp7:0.34,mp8:0.80} },
            { id:"gpt-54-nano",      name:"GPT-5.4-nano",  org:"OpenAI", harness:"ReAct",
              n:24, mean_score:0.584, task_success:0.500, avg_turns:121.7,avg_tokens:2385248,
              per_task:{mp1:1.00,mp2:1.00,mp3:1.00,mp4:1.00,mp5:0.00,mp6:1.00,mp7:0.94,mp8:0.97} },
          ]
        }
      ]
    },
    { id:"mit_6_1810",   name:"MIT 6.1810",         full_name:"Operating System Engineering",      domain:"os",   institution:"MIT",                                 year:2024, language:"C",   has_results:false, tasks:[] },
    { id:"pku_os",       name:"PKU OS",              full_name:"Operating Systems",                 domain:"os",   institution:"Peking University",                   year:2025, language:"C",   has_results:false, tasks:[] },
    {
      id: "uiuc_cs423",
      name: "UIUC CS 423",
      full_name: "Operating Systems Design",
      domain: "os",
      institution: "University of Illinois at Urbana-Champaign",
      year: 2025,
      language: "C",
      has_results: true,
      tasks: [
        { id:"mp1", name:"Kernel Module",                    short:"Kernel Mod",  topics:"proc_fs · Timer · List",                         max_points:100 },
        { id:"mp2", name:"Rate-Monotonic CPU Scheduling",    short:"RMS Sched",   topics:"RMS · Kernel threads · proc_fs",                 max_points:100 },
        { id:"mp3", name:"MP3: Page Fault Profiler",         short:"Page Fault",  topics:"vmalloc · mmap · Char device · Work queue",     max_points:100 },
        { id:"mp4", name:"MP4: Virtual Machine",             short:"VM",          topics:"KVM · Memory virtualization · Hypervisor",      max_points:100 },
      ],
      tiers: [
        {
          id: "student",
          label: "Student friendly",
          desc: "Free or university-provided models · reflects what students can realistically deploy · 3 runs per task · errors excluded from heatmap",
          models: [
            { id:"qwen3-coder-next",        name:"Qwen3-Coder-Next",          org:"Lumen (UIUC)",  harness:"ReAct",
              n:3, mean_score:0.57, task_success:0.333, avg_turns:86, avg_tokens:null,
              per_task:{mp1:0.75, mp2:0.40, mp3:null, mp4:null} },
            { id:"qwen3-35b-a3b",           name:"Qwen3.6-35b-a3b",           org:"Lumen (UIUC)",  harness:"ReAct",
              n:3, mean_score:0.56, task_success:0.333, avg_turns:88, avg_tokens:null,
              per_task:{mp1:1.00, mp2:0.12, mp3:null, mp4:null} },
            { id:"gemma-4-31b-it",          name:"Gemma-4-31b-it",            org:"Lumen (UIUC)",   harness:"ReAct",
              n:3, mean_score:0.52, task_success:0.000, avg_turns:23, avg_tokens:null,
              per_task:{mp1:0.95, mp2:0.10, mp3:null, mp4:null} },
            { id:"nemotron-3-super-120b",   name:"Nemotron-3-Super-120b-a12b", org:"Lumen (UIUC)",  harness:"ReAct",
              n:3, mean_score:0.40, task_success:0.000, avg_turns:36, avg_tokens:null,
              per_task:{mp1:0.45, mp2:0.35, mp3:null, mp4:null} },
          ],
        },
        {
          id: "common",
          label: "Common resources",
          desc: "Models & budgets realistically available to students · 100 max turns · 3 runs per task",
          models: [
            // Add common-resource model results here when available.
          ],
        },
        {
          id: "rich",
          label: "Resource rich",
          desc: "Frontier models with larger turn budgets · 200 max turns · 3 runs per task",
          models: [
            // Add resource-rich model results here when available.
          ],
        },
      ],
    },
    { id:"mit_6_5840",   name:"MIT 6.5840",          full_name:"Distributed Systems",               domain:"dist", institution:"MIT",                                 year:2024, language:"Go",  has_results:false, tasks:[] },
    { id:"sbu_cse535",   name:"SBU CSE535",          full_name:"Distributed Systems",               domain:"dist", institution:"Stony Brook University",              year:2023, language:"Go",  has_results:false, tasks:[] },
    { id:"sfu_cmpt201",  name:"SFU CMPT 201",        full_name:"Operating Systems I",               domain:"intro",institution:"Simon Fraser University",             year:2024, language:"C",   has_results:false, tasks:[] },
    { id:"uwisc",        name:"UWisc CS 537",        full_name:"Intro to Operating Systems",        domain:"intro",institution:"University of Wisconsin–Madison",     year:2024, language:"C++", has_results:false, tasks:[] },
    { id:"uchicago_db",  name:"UChicago CMSC 23500", full_name:"Introduction to Database Systems",  domain:"db",   institution:"University of Chicago",               year:2024, language:"C",   has_results:false, tasks:[] },
  ],

  // ── SYSEXAM ─────────────────────────────────────────────────────────────
  exams: [
    { id:"mit_6_1810_f24", course:"MIT 6.1810", name:"OS Engineering Final",     year:2024, questions:14, points:70,  domain:"os",   has_results:false },
    { id:"mit_6_5840_s24", course:"MIT 6.5840", name:"Distributed Systems Exam", year:2024, questions:10, points:100, domain:"dist", has_results:false },
    { id:"uiuc_423_mid",   course:"UIUC CS 423",name:"OS Design Midterm",        year:2025, questions:12, points:60,  domain:"os",   has_results:false },
    { id:"uiuc_423_fin",   course:"UIUC CS 423",name:"OS Design Final",          year:2025, questions:15, points:75,  domain:"os",   has_results:false },
    { id:"sfu_cmpt201",    course:"SFU CMPT 201",name:"Systems Programming Final",year:2024,questions:20, points:80,  domain:"intro",has_results:false },
    { id:"sbu_cse535",     course:"SBU CSE535", name:"Distributed Systems Final", year:2023, questions:18, points:90,  domain:"dist", has_results:false },
  ],
};
