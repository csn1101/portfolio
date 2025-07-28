// Collapsible Experience/Project Sections
document.addEventListener('DOMContentLoaded', function() {
  const collapsibles = document.querySelectorAll('.collapsible');
  collapsibles.forEach(function(header) {
    header.addEventListener('click', function() {
      header.classList.toggle('active');
      const content = header.nextElementSibling;
      if (content.classList.contains('collapsible-content')) {
        if (content.classList.contains('open')) {
          content.classList.remove('open');
          setTimeout(() => { content.style.display = 'none'; }, 400);
        } else {
          content.style.display = 'block';
          setTimeout(() => { content.classList.add('open'); }, 10);
        }
      }
    });
    // Start collapsed
    const content = header.nextElementSibling;
    if (content.classList.contains('collapsible-content')) {
      content.style.display = 'none';
    }
  });
});
// Floating Chatbot Widget Logic
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotPopup = document.getElementById('chatbotPopup');

if (chatbotToggle && chatbotPopup) {
  chatbotToggle.onclick = function() {
    chatbotPopup.classList.toggle('active');
  };
}
// Career Chatbot Logic
const chatWindow = document.getElementById('chatWindow');
const chatInput = document.getElementById('chatInput');
const sendChatBtn = document.getElementById('sendChatBtn');

const careerAnswers = [
  {
    keywords: ['azure', 'cloud', 'data migration', 'synapse', 'factory', 'sql'],
    answer: 'I have led data migration and scalable data ingestion pipelines using Azure Synapse, Data Factory, and SQL Pools, ensuring robust cloud architecture and efficient data operations.'
  },
  {
    keywords: ['machine learning', 'ml', 'predictive', 'workflow'],
    answer: 'I have developed and deployed machine learning workflows for predictive analytics, including regression and classification models for business reporting.'
  },
  {
    keywords: ['power bi', 'dashboard', 'analytics'],
    answer: 'I designed interactive Power BI dashboards for real-time monitoring and analytics, enabling deep-dive insights and operational decision-making.'
  },
  {
    keywords: ['genai', 'llm', 'openai', 'chatbot', 'gpt'],
    answer: 'I have implemented GenAI chatbot solutions using Azure OpenAI Services and GPT models for text summarization and embedding workflows.'
  },
  {
    keywords: ['aws', 'quickSight', 'sagemaker', 'glue', 'etl'],
    answer: 'At Amazon, I built interactive dashboards in AWS QuickSight, executed ETL pipelines using AWS Glue, and optimized models with Sagemaker.'
  },
  {
    keywords: ['leadership', 'mentoring', 'team'],
    answer: 'I have mentored junior team members, led cross-functional teams, and managed stakeholder requirements for successful project delivery.'
  },
  {
    keywords: ['skills', 'languages', 'modules', 'tools'],
    answer: 'My technical skills include Python, SQL Server, MySQL, PySpark, Power BI, Tableau, Pandas, Numpy, Scikit-Learn, and more.'
  },
  {
    keywords: ['experience', 'career', 'background'],
    answer: 'I have 4.5+ years of experience across insurance, manufacturing, and e-commerce domains, working with Cognizant, Shyam Steel, and Amazon.'
  }
];

function getCareerAnswer(question) {
  const q = question.toLowerCase();
  for (const item of careerAnswers) {
    if (item.keywords.some(k => q.includes(k))) {
      return item.answer;
    }
  }
  return "I'm happy to answer any questions about my career, experience, or skills. Please ask something specific!";
}

function addChatMessage(text, sender) {
  const msgDiv = document.createElement('div');
  msgDiv.className = 'chat-message ' + sender;
  msgDiv.textContent = text;
  chatWindow.appendChild(msgDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

if (sendChatBtn && chatInput && chatWindow) {
  sendChatBtn.onclick = function() {
    const userMsg = chatInput.value.trim();
    if (!userMsg) return;
    addChatMessage(userMsg, 'user');
    setTimeout(() => {
      addChatMessage(getCareerAnswer(userMsg), 'bot');
    }, 600);
    chatInput.value = '';
  };
  chatInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      sendChatBtn.click();
    }
  });
}
// Simple contact form handler (demo only, does not send email)
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            formMessage.textContent = 'Thank you for your message! (Demo only, not sent)';
            form.reset();
        });
    }

    // Skills Table Collapsible Logic
    // Add "Show All" header if not present
    const skillsTable = document.querySelector('.skills-table-collapsible');
    const skillsTableHeadRow = skillsTable ? skillsTable.querySelector('thead tr') : null;
    if (skillsTableHeadRow && !skillsTableHeadRow.querySelector('.collapsible-skill-header.show-all')) {
      const showAllTh = document.createElement('th');
      showAllTh.textContent = 'Show All';
      showAllTh.className = 'collapsible-skill-header show-all';
      showAllTh.setAttribute('data-skill', 'all');
      skillsTableHeadRow.appendChild(showAllTh);
    }

    const skillHeaders = document.querySelectorAll('.collapsible-skill-header');
    const skillRows = {
      cloud: document.querySelector('.skills-row.skills-cloud'),
      languages: document.querySelector('.skills-row.skills-languages'),
      tools: document.querySelector('.skills-row.skills-tools'),
      modules: document.querySelector('.skills-row.skills-modules'),
      softskills: document.querySelector('.skills-row.skills-softskills')
    };

    // Create a single 'show all' row if not present
    let showAllRow = document.querySelector('.skills-row.skills-showall');
    if (!showAllRow && skillsTable) {
      showAllRow = document.createElement('tr');
      showAllRow.className = 'skills-row skills-showall';
      showAllRow.style.display = 'none';
      // Create 5 columns for each skill type
      const skillLists = {
        cloud: [
          'Azure Databricks','Azure Data Factory','Azure Synapse','Azure SQL','ADLS Gen 2','Azure Open AI','Azure ML Studio','Azure ML Flow'
        ],
        languages: [
          'Python','SQL Server','MySQL','PySpark','HTML','CSS'
        ],
        tools: [
          'SSMS','Workbench','Tableau','Excel','Jira','Figma','Power BI'
        ],
        modules: [
          'Data Science','Machine Learning','ELT/ETL','Deep Learning','LLM','GenAI','Pandas, Numpy','Matplotlib, Seaborn','Scikit-Learn','NLP Frameworks','Data Engineering','MLOps','Tensorflow'
        ],
        softskills: [
          'Strong communication skills for cross-functional collaboration','Leadership and team management capabilities','Problem-solving and critical thinking under tight deadlines','Project planning and task prioritization','Mentoring and skill development for junior team members','Stakeholder management and requirements gathering','Adaptability to fast-changing technologies and business needs'
        ]
      };
      Object.keys(skillLists).forEach(type => {
        const td = document.createElement('td');
        const ul = document.createElement('ul');
        skillLists[type].forEach(skill => {
          const li = document.createElement('li');
          li.textContent = skill;
          ul.appendChild(li);
        });
        td.appendChild(ul);
        showAllRow.appendChild(td);
      });
      skillsTable.querySelector('tbody').appendChild(showAllRow);
    }

    skillHeaders.forEach(header => {
      header.addEventListener('click', function() {
        const skillType = header.getAttribute('data-skill');
        const isActive = header.classList.contains('active');
        // Collapse all rows and remove active from all headers
        Object.values(skillRows).forEach(row => {
          if (row) row.style.display = 'none';
        });
        if (showAllRow) showAllRow.style.display = 'none';
        skillHeaders.forEach(h => h.classList.remove('active'));

        if (skillType === 'all') {
          // Toggle Show All row
          if (!isActive) {
            if (showAllRow) showAllRow.style.display = '';
            header.classList.add('active');
          }
          // If already active, just collapse all
        } else {
          // Toggle selected skill group
          const row = skillRows[skillType];
          if (!isActive) {
            if (row) {
              row.style.display = '';
              header.classList.add('active');
            }
          }
          // If already active, just collapse all (already done above)
        }
      });
    });
});
