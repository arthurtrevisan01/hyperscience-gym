


New Chat
Leaderboard
Search
Today
Revisar código PWA
More
PWA setup styling
More
Older
Eu tenho um PWA no meu Iphone e gostaria de adicionar algumas funções, como posso fazer isso??
More


arthuroliva@escola.pr.gov.br
Terms of Use
Privacy Policy
Cookies

Battle Mode



quero que dê uma olhada no meu PWA.
meu index.html: <!DOCTYPE html>

<html lang="pt-BR"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"> <title>HyperScience PWA 2.0</title> <link rel="manifest" href="manifest.json"> <script src="https://cdn.tailwindcss.com"></script> text<!-- Ícone para iOS --><link rel="apple-touch-icon" href="https://img.icons8.com/ios-filled/180/4a90e2/dumbbell.png"> <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"> <meta name="apple-mobile-web-app-capable" content="yes"><style> body { -webkit-tap-highlight-color: transparent; overscroll-behavior-y: none; background-color: #111827; color: #f3f4f6; } .safe-area-pb { padding-bottom: env(safe-area-inset-bottom); } /* Animações */ .fade-in { animation: fadeIn 0.3s ease-in-out; } @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } } .card { background: #1f2937; border-radius: 1rem; padding: 1rem; margin-bottom: 1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); transition: all 0.2s; } .card:active { transform: scale(0.98); } /* Inputs */ input[type="number"] { background: #374151; color: white; border: 1px solid #4b5563; border-radius: 0.5rem; padding: 0.5rem; width: 100%; text-align: center; font-size: 1.1rem; } input:focus { outline: 2px solid #60a5fa; border-color: transparent; } /* Modal */ #modal-overlay { background: rgba(0,0,0,0.8); backdrop-filter: blur(4px); } </style></head> <body class="font-sans antialiased pb-24 select-none"> text<!-- Header --><header class="fixed top-0 w-full bg-gray-800 p-4 shadow-lg z-40 flex justify-between items-center border-b border-gray-700"> <h1 class="text-xl font-bold text-blue-400 tracking-tighter cursor-pointer" onclick="router('home')">HYPER<span class="text-white">SCIENCE</span></h1> <div class="flex items-center gap-2"> <span id="page-title" class="text-xs text-gray-400 font-mono">BETA</span> <div id="status-indicator" class="w-2 h-2 rounded-full bg-green-500"></div> </div> </header><!-- Main Content --><main class="mt-20 px-4 container mx-auto max-w-md" id="app"> <!-- Views injetadas aqui --> </main><!-- Modal de Troca de Exercício --><div id="swap-modal" class="hidden fixed inset-0 z-50 flex items-end sm:items-center justify-center pointer-events-none"> <div id="modal-overlay" class="absolute inset-0 pointer-events-auto" onclick="closeModal()"></div> <div class="bg-gray-800 w-full max-w-md p-6 rounded-t-2xl sm:rounded-xl relative z-10 transform transition-transform pointer-events-auto border-t border-gray-600 shadow-2xl"> <div class="flex justify-between items-center mb-4"> <h3 class="text-xl font-bold text-white">Substituir Exercício</h3> <button onclick="closeModal()" class="text-gray-400 hover:text-white text-2xl">&times;</button> </div> <p class="text-sm text-gray-400 mb-4">Selecione uma variação biomecânica equivalente:</p> <div id="swap-list" class="space-y-2 max-h-[60vh] overflow-y-auto pr-2"> <!-- Lista gerada via JS --> </div> </div> </div><!-- Navigation --><nav class="fixed bottom-0 w-full bg-gray-800 border-t border-gray-700 flex justify-around py-3 z-40 safe-area-pb"> <button onclick="router('home')" class="nav-btn flex flex-col items-center text-gray-400 hover:text-blue-400 transition"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg> <span class="text-[10px] mt-1 uppercase tracking-wider">Treinar</span> </button> <button onclick="router('history')" class="nav-btn flex flex-col items-center text-gray-400 hover:text-blue-400 transition"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg> <span class="text-[10px] mt-1 uppercase tracking-wider">Histórico</span> </button> <button onclick="router('settings')" class="nav-btn flex flex-col items-center text-gray-400 hover:text-blue-400 transition"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> <span class="text-[10px] mt-1 uppercase tracking-wider">Dados</span> </button> </nav><script> // ========================================== // DADOS CIENTÍFICOS & EXERCÍCIOS // ========================================== // Categoria de Movimento (Pattern) const EXERCISE_DB = { 'horizontal_push': { name: 'Empurrar Horizontal (Peito)', exercises: ['Supino Reto (Barra)', 'Supino Reto (Halteres)', 'Supino Máquina', 'Flexão de Braço', 'Supino Smith'] }, 'incline_push': { name: 'Empurrar Inclinado (Superior)', exercises: ['Supino Inclinado (Halteres)', 'Supino Inclinado (Barra)', 'Supino Inclinado Máquina', 'Smith Inclinado'] }, 'vertical_push': { name: 'Empurrar Vertical (Ombros)', exercises: ['Desenvolvimento (Halteres)', 'Desenvolvimento Militar (Barra)', 'Desenvolvimento Máquina', 'Elevação Frontal'] }, 'isolation_chest': { name: 'Isolamento Peito', exercises: ['Crucifixo (Peck Deck)', 'Crucifixo (Halteres)', 'Crossover Polia Alta', 'Crossover Polia Baixa'] }, 'isolation_delt': { name: 'Isolamento Ombro', exercises: ['Elevação Lateral (Halteres)', 'Elevação Lateral (Polia)', 'Elevação Lateral (Máquina)', 'Face Pull'] }, 'triceps': { name: 'Tríceps', exercises: ['Tríceps Polia (Corda)', 'Tríceps Testa', 'Tríceps Francês', 'Paralelas', 'Tríceps Coice'] }, 'vertical_pull': { name: 'Puxada Vertical (Dorsal)', exercises: ['Puxada Alta (Frente)', 'Barra Fixa', 'Puxada Triângulo', 'Graviton'] }, 'horizontal_pull': { name: 'Remada (Espessura)', exercises: ['Remada Curvada (Barra)', 'Remada Unilateral (Serrote)', 'Remada Baixa (Triângulo)', 'Remada Máquina'] }, 'biceps': { name: 'Bíceps', exercises: ['Rosca Direta (Barra)', 'Rosca Alternada (Halteres)', 'Rosca Scott', 'Rosca Martelo', 'Rosca Polia'] }, 'squat_pattern': { name: 'Agachamento (Quadríceps)', exercises: ['Agachamento Livre', 'Leg Press 45', 'Hack Machine', 'Agachamento Búlgaro', 'Passada'] }, 'hinge_pattern': { name: 'Extensão de Quadril (Posterior)', exercises: ['Levantamento Terra', 'Stiff', 'RDL (Romanian Deadlift)', 'Elevação Pélvica'] }, 'isolation_leg': { name: 'Isolamento Perna', exercises: ['Cadeira Extensora', 'Mesa Flexora', 'Cadeira Flexora', 'Cadeira Adutora'] }, 'calves': { name: 'Panturrilhas', exercises: ['Panturrilha em Pé', 'Panturrilha Sentado', 'Panturrilha Leg Press'] }, 'abs': { name: 'Abdômen', exercises: ['Abdominal Infra', 'Abdominal Supra (Máquina)', 'Prancha', 'Lenhador (Polia)'] } }; const WORKOUT_PLANS = { 'ppl': { name: 'PPL (Push/Pull/Legs)', desc: 'Alta frequência, divisão clássica.', days: [ { id: 'push', name: 'Empurrar (Peito/Ombro/Tríceps)', default_exercises: [ { cat: 'horizontal_push', ex: 'Supino Reto (Barra)' }, { cat: 'incline_push', ex: 'Supino Inclinado (Halteres)' }, { cat: 'vertical_push', ex: 'Desenvolvimento (Halteres)' }, { cat: 'isolation_delt', ex: 'Elevação Lateral (Halteres)' }, { cat: 'isolation_chest', ex: 'Crucifixo (Peck Deck)' }, { cat: 'triceps', ex: 'Tríceps Polia (Corda)' } ] }, { id: 'pull', name: 'Puxar (Costas/Bíceps)', default_exercises: [ { cat: 'vertical_pull', ex: 'Puxada Alta (Frente)' }, { cat: 'horizontal_pull', ex: 'Remada Curvada (Barra)' }, { cat: 'horizontal_pull', ex: 'Remada Baixa (Triângulo)' }, { cat: 'isolation_delt', ex: 'Face Pull' }, { cat: 'biceps', ex: 'Rosca Direta (Barra)' }, { cat: 'biceps', ex: 'Rosca Martelo' } ] }, { id: 'legs', name: 'Pernas Completo', default_exercises: [ { cat: 'squat_pattern', ex: 'Agachamento Livre' }, { cat: 'squat_pattern', ex: 'Leg Press 45' }, { cat: 'hinge_pattern', ex: 'Stiff' }, { cat: 'isolation_leg', ex: 'Cadeira Extensora' }, { cat: 'isolation_leg', ex: 'Mesa Flexora' }, { cat: 'calves', ex: 'Panturrilha em Pé' } ] } ] }, 'upper_lower': { name: 'Upper / Lower', desc: 'Foco em força e descanso.', days: [ { id: 'upper', name: 'Superiores', default_exercises: [ { cat: 'horizontal_push', ex: 'Supino Reto (Barra)' }, { cat: 'horizontal_pull', ex: 'Remada Curvada (Barra)' }, { cat: 'vertical_push', ex: 'Desenvolvimento Militar (Barra)' }, { cat: 'vertical_pull', ex: 'Barra Fixa' }, { cat: 'triceps', ex: 'Tríceps Testa' }, { cat: 'biceps', ex: 'Rosca Direta (Barra)' } ] }, { id: 'lower', name: 'Inferiores', default_exercises: [ { cat: 'squat_pattern', ex: 'Agachamento Livre' }, { cat: 'hinge_pattern', ex: 'Levantamento Terra' }, { cat: 'squat_pattern', ex: 'Passada' }, { cat: 'isolation_leg', ex: 'Cadeira Extensora' }, { cat: 'calves', ex: 'Panturrilha Sentado' }, { cat: 'abs', ex: 'Abdominal Infra' } ] } ] }, 'arnold': { name: 'Arnold Split', desc: 'Peito+Costas, Ombros+Braços.', days: [ { id: 'chest_back', name: 'Peito e Costas', default_exercises: [ { cat: 'horizontal_push', ex: 'Supino Reto (Barra)' }, { cat: 'horizontal_pull', ex: 'Barra Fixa' }, { cat: 'incline_push', ex: 'Supino Inclinado (Halteres)' }, { cat: 'horizontal_pull', ex: 'Remada Unilateral (Serrote)' }, { cat: 'isolation_chest', ex: 'Crucifixo (Halteres)' } ] }, { id: 'delt_arm', name: 'Ombros e Braços', default_exercises: [ { cat: 'vertical_push', ex: 'Desenvolvimento (Halteres)' }, { cat: 'isolation_delt', ex: 'Elevação Lateral (Polia)' }, { cat: 'biceps', ex: 'Rosca Direta (Barra)' }, { cat: 'triceps', ex: 'Tríceps Francês' }, { cat: 'biceps', ex: 'Rosca Scott' }, { cat: 'triceps', ex: 'Tríceps Polia (Corda)' } ] }, { id: 'leg', name: 'Pernas', default_exercises: [ { cat: 'squat_pattern', ex: 'Agachamento Livre' }, { cat: 'hinge_pattern', ex: 'RDL (Romanian Deadlift)' }, { cat: 'squat_pattern', ex: 'Leg Press 45' }, { cat: 'isolation_leg', ex: 'Cadeira Extensora' }, { cat: 'isolation_leg', ex: 'Mesa Flexora' } ] } ] } }; // ========================================== // ESTADO GLOBAL DO APP // ========================================== let appState = { currentPlanKey: null, tempWorkoutSetup: null, // Usado na tela de personalização activeWorkout: null, // Treino em andamento history: JSON.parse(localStorage.getItem('hyperHistory')) || [], settings: { theme: 'dark' } }; // Salvar histórico automaticamente function saveHistory() { localStorage.setItem('hyperHistory', JSON.stringify(appState.history)); } // ========================================== // ROTEAMENTO & VIEWS // ========================================== function router(view, params = null) { const app = document.getElementById('app'); app.innerHTML = ''; // Limpa tela // Highlight na nav document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('text-blue-400')); if (view === 'home') { renderHome(app); document.querySelectorAll('.nav-btn')[0].classList.add('text-blue-400'); } else if (view === 'plan_days') renderPlanDays(app, params); else if (view === 'workout_setup') renderWorkoutSetup(app, params); else if (view === 'active_session') renderActiveSession(app); else if (view === 'result') renderResult(app, params); else if (view === 'history') { renderHistory(app); document.querySelectorAll('.nav-btn')[1].classList.add('text-blue-400'); } else if (view === 'settings') { renderSettings(app); document.querySelectorAll('.nav-btn')[2].classList.add('text-blue-400'); } } // 1. HOME VIEW function renderHome(container) { let html = ` <div class="fade-in pb-20"> <div class="mb-6"> <h2 class="text-2xl font-bold text-white mb-1">Escolha sua Estratégia</h2> <p class="text-gray-400 text-sm">Selecione um plano baseado na ciência.</p> </div>`; // Botão Repetir Último Treino if (appState.history.length > 0) { const last = appState.history[0]; html += ` <div onclick="repeatLastWorkout()" class="mb-8 p-4 bg-gradient-to-r from-blue-900 to-gray-800 rounded-xl border border-blue-700 cursor-pointer shadow-lg active:scale-95 transition transform"> <div class="flex justify-between items-center mb-2"> <span class="bg-blue-600 text-xs font-bold px-2 py-1 rounded text-white">REPETIR ÚLTIMO</span> <span class="text-xs text-blue-200">${new Date(last.startTime).toLocaleDateString()}</span> </div> <h3 class="font-bold text-lg text-white">${last.dayName}</h3> <p class="text-xs text-gray-300 mt-1">${last.exercises.length} exercícios realizados</p> </div>`; } // Lista de Planos for (const [key, plan] of Object.entries(WORKOUT_PLANS)) { html += ` <div onclick="router('plan_days', '${key}')" class="card cursor-pointer border border-gray-700 hover:border-blue-500 group"> <div class="flex justify-between items-center"> <h3 class="text-xl font-bold text-blue-400 group-hover:text-blue-300">${plan.name}</h3> <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg> </div> <p class="text-gray-400 text-sm mt-2">${plan.desc}</p> </div>`; } html += `</div>`; container.innerHTML = html; } // 2. SELEÇÃO DE DIAS function renderPlanDays(container, planKey) { const plan = WORKOUT_PLANS[planKey]; let html = ` <div class="fade-in"> <button onclick="router('home')" class="mb-4 text-gray-400 text-sm flex items-center hover:text-white"> <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg> Voltar </button> <h2 class="text-2xl font-bold mb-6">${plan.name}</h2> <div class="space-y-3">`; plan.days.forEach((day, idx) => { html += ` <div onclick="initSetup('${planKey}', ${idx})" class="card cursor-pointer active:scale-95 flex items-center justify-between"> <div> <h3 class="font-bold text-lg text-white">${day.name}</h3> <p class="text-xs text-gray-500">${day.default_exercises.length} Exercícios Padrão</p> </div> <div class="bg-gray-700 p-2 rounded-full"> <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> </div> </div>`; }); html += `</div></div>`; container.innerHTML = html; } // 3. SETUP & CUSTOMIZAÇÃO (Onde a mágica acontece) function initSetup(planKey, dayIndex) { const dayData = WORKOUT_PLANS[planKey].days[dayIndex]; // Clona os exercícios padrão para uma lista editável appState.tempWorkoutSetup = { planName: WORKOUT_PLANS[planKey].name, dayName: dayData.name, exercises: dayData.default_exercises.map(item => ({ name: item.ex, category: item.cat, // Mantém a categoria para permitir trocas inteligentes sets: [{weight: '', reps: '', rpe: ''}] })) }; router('workout_setup'); } function renderWorkoutSetup(container) { const setup = appState.tempWorkoutSetup; let html = ` <div class="fade-in pb-24"> <h2 class="text-xl font-bold mb-2">Personalizar Treino</h2> <p class="text-sm text-gray-400 mb-6">Toque em um exercício para substituí-lo por uma variação equivalente.</p> <div class="space-y-3 mb-8">`; setup.exercises.forEach((ex, idx) => { const catName = EXERCISE_DB[ex.category] ? EXERCISE_DB[ex.category].name : 'Geral'; html += ` <div onclick="openSwapModal(${idx})" class="card border border-gray-700 hover:border-blue-500 cursor-pointer flex justify-between items-center group"> <div> <p class="text-[10px] text-blue-400 uppercase tracking-wide font-bold mb-1">${catName}</p> <h3 class="font-bold text-white group-hover:text-blue-300 transition">${ex.name}</h3> </div> <svg class="w-5 h-5 text-gray-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg> </div>`; }); html += ` </div> <button onclick="startActiveSession()" class="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl shadow-lg transform transition active:scale-95 flex justify-center items-center text-lg"> INICIAR TREINO </button> </div>`; container.innerHTML = html; } // 3.1 MODAL DE TROCA let currentSwapIndex = null; function openSwapModal(index) { currentSwapIndex = index; const exData = appState.tempWorkoutSetup.exercises[index]; const categoryData = EXERCISE_DB[exData.category]; if(!categoryData) { alert("Este exercício não tem variações cadastradas."); return; } const listEl = document.getElementById('swap-list'); listEl.innerHTML = categoryData.exercises.map(exName => ` <div onclick="confirmSwap('${exName}')" class="p-3 rounded bg-gray-700 hover:bg-gray-600 cursor-pointer flex justify-between items-center ${exName === exData.name ? 'border border-blue-500' : ''}"> <span class="text-white font-medium">${exName}</span> ${exName === exData.name ? '<span class="text-xs text-blue-400">Atual</span>' : ''} </div> `).join(''); document.getElementById('swap-modal').classList.remove('hidden'); document.getElementById('swap-modal').classList.add('flex'); } function closeModal() { document.getElementById('swap-modal').classList.add('hidden'); document.getElementById('swap-modal').classList.remove('flex'); currentSwapIndex = null; } function confirmSwap(newName) { if (currentSwapIndex !== null) { appState.tempWorkoutSetup.exercises[currentSwapIndex].name = newName; router('workout_setup'); // Re-renderiza para mostrar o novo nome } closeModal(); } // 4. SESSÃO ATIVA function startActiveSession() { // Copia o setup para o treino ativo appState.activeWorkout = JSON.parse(JSON.stringify(appState.tempWorkoutSetup)); appState.activeWorkout.startTime = Date.now(); router('active_session'); } function repeatLastWorkout() { if(appState.history.length === 0) return; const last = appState.history[0]; // Recria a estrutura baseada no histórico, mas limpa os valores das séries const newSession = { planName: last.planName, dayName: last.dayName, exercises: last.exercises.map(ex => ({ name: ex.name, category: ex.category || 'unknown', // Fallback sets: [{weight: '', reps: '', rpe: ''}] })), startTime: Date.now() }; appState.activeWorkout = newSession; router('active_session'); } function renderActiveSession(container) { const workout = appState.activeWorkout; let html = ` <div class="fade-in pb-24"> <div class="sticky top-16 bg-gray-900 pt-2 pb-4 z-30 flex justify-between items-end border-b border-gray-800 mb-4"> <div> <h2 class="text-lg font-bold text-white leading-tight">${workout.dayName}</h2> <p class="text-xs text-blue-400 font-mono mt-1" id="timer">00:00</p> </div> <button onclick="finishWorkout()" class="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow hover:bg-red-700">FINALIZAR</button> </div>`; workout.exercises.forEach((ex, exIdx) => { html += ` <div class="card border border-gray-700 relative"> <div class="mb-3"> <h3 class="font-bold text-lg text-blue-300">${ex.name}</h3> </div> <div class="grid grid-cols-[1fr_1fr_1fr_30px] gap-2 text-[10px] text-gray-500 uppercase font-bold text-center mb-2"> <span>KG</span> <span>REPS</span> <span>RPE</span> <span></span> </div> <div id="sets-container-${exIdx}" class="space-y-2">`; ex.sets.forEach((set, setIdx) => { html += ` <div class="grid grid-cols-[1fr_1fr_1fr_30px] gap-2 items-center"> <input type="number" placeholder="-" value="${set.weight}" onchange="updateSet(${exIdx}, ${setIdx}, 'weight', this.value)"> <input type="number" placeholder="-" value="${set.reps}" onchange="updateSet(${exIdx}, ${setIdx}, 'reps', this.value)"> <input type="number" placeholder="-" value="${set.rpe}" class="${set.rpe >= 9 ? 'text-red-400 border-red-900' : ''}" onchange="updateSet(${exIdx}, ${setIdx}, 'rpe', this.value)"> <button onclick="removeSet(${exIdx}, ${setIdx})" class="text-gray-600 hover:text-red-500 flex justify-center"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg> </button> </div>`; }); html += ` </div> <button onclick="addSet(${exIdx})" class="w-full mt-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 border-dashed rounded text-xs text-gray-400 font-bold uppercase tracking-widest">+ Série</button> </div>`; }); html += `</div>`; container.innerHTML = html; startTimer(); } // Lógica de Inputs e Sets window.updateSet = (exIdx, setIdx, field, val) => { appState.activeWorkout.exercises[exIdx].sets[setIdx][field] = val; }; window.addSet = (exIdx) => { const prev = appState.activeWorkout.exercises[exIdx].sets; const lastSet = prev[prev.length - 1]; // Copia peso e reps do anterior para agilizar prev.push({ weight: lastSet.weight, reps: lastSet.reps, rpe: '' }); renderActiveSession(document.getElementById('app')); }; window.removeSet = (exIdx, setIdx) => { const sets = appState.activeWorkout.exercises[exIdx].sets; if(sets.length > 1) { sets.splice(setIdx, 1); renderActiveSession(document.getElementById('app')); } }; // Timer let timerInterval; function startTimer() { if(timerInterval) clearInterval(timerInterval); const start = appState.activeWorkout.startTime; const el = document.getElementById('timer'); timerInterval = setInterval(() => { if(!el) return; const diff = Math.floor((Date.now() - start) / 1000); const m = Math.floor(diff / 60).toString().padStart(2, '0'); const s = (diff % 60).toString().padStart(2, '0'); el.innerText = `${m}:${s}`; }, 1000); } // 5. FINALIZAÇÃO & ANÁLISE function finishWorkout() { if(!confirm("Finalizar treino?")) return; clearInterval(timerInterval); const workout = appState.activeWorkout; workout.endTime = Date.now(); workout.duration = Math.floor((workout.endTime - workout.startTime) / 1000 / 60); // Algoritmo de Análise workout.analysis = analyzeWorkout(workout); // Salvar appState.history.unshift(workout); saveHistory(); appState.activeWorkout = null; router('result', workout); } function analyzeWorkout(workout) { let totalSets = 0; let hardSets = 0; // RPE >= 8 let volume = 0; workout.exercises.forEach(ex => { ex.sets.forEach(s => { const w = parseFloat(s.weight) || 0; const r = parseFloat(s.reps) || 0; const rpe = parseFloat(s.rpe) || 0; if(w > 0 && r > 0) { totalSets++; volume += w * r; if(rpe >= 8) hardSets++; } }); }); // Lógica de Notas let grade = 'C'; let feedback = []; const intensity = totalSets > 0 ? hardSets / totalSets : 0; if(intensity > 0.7) { grade = 'S'; feedback.push("🔥 Intensidade Brutal! A maioria das séries foi até a falha ou perto."); } else if (intensity > 0.4) { grade = 'A'; feedback.push("✅ Bom trabalho. Manteve uma intensidade decente."); } else { grade = 'B'; feedback.push("⚠️ Dica: Aumente a carga ou vá mais perto da falha (RPE alto)."); } if(totalSets < 8) feedback.push("📉 Volume baixo. Considere adicionar mais exercícios."); if(totalSets > 24) feedback.push("🛑 Volume muito alto. Cuidado com overtraining."); return { grade, feedback, volume, totalSets }; } function renderResult(container, workout) { const colors = { 'S': 'text-purple-400', 'A': 'text-green-400', 'B': 'text-blue-400', 'C': 'text-yellow-400' }; const color = colors[workout.analysis.grade] || 'text-white'; let html = ` <div class="fade-in pt-6 pb-20 text-center"> <div class="mb-6"> <p class="text-gray-400 uppercase text-xs tracking-widest mb-2">Relatório do Treino</p> <div class="inline-block p-8 rounded-full bg-gray-800 border-4 border-gray-700 shadow-2xl mb-4"> <h1 class="text-6xl font-black ${color}">${workout.analysis.grade}</h1> </div> <p class="text-white font-bold text-xl">${workout.duration} minutos</p> </div> <div class="grid grid-cols-2 gap-4 mb-8 text-left"> <div class="card bg-gray-800 mb-0"> <p class="text-xs text-gray-500 uppercase">Volume</p> <p class="text-xl font-bold text-white">${(workout.analysis.volume / 1000).toFixed(1)}t</p> </div> <div class="card bg-gray-800 mb-0"> <p class="text-xs text-gray-500 uppercase">Séries Válidas</p> <p class="text-xl font-bold text-white">${workout.analysis.totalSets}</p> </div> </div> <div class="space-y-3 mb-8 text-left"> ${workout.analysis.feedback.map(f => ` <div class="p-3 bg-gray-800 border-l-4 border-blue-500 rounded text-sm text-gray-300">${f}</div> `).join('')} </div> <button onclick="router('home')" class="w-full bg-gray-700 hover:bg-gray-600 py-4 rounded-xl font-bold text-white mb-20">VOLTAR AO INÍCIO</button> </div>`; container.innerHTML = html; } // 6. HISTÓRICO function renderHistory(container) { if(appState.history.length === 0) { container.innerHTML = `<div class="fade-in text-center mt-32 text-gray-500"><p>Nenhum treino registrado.</p></div>`; return; } let html = `<div class="fade-in pb-20"><h2 class="text-2xl font-bold mb-6">Seu Histórico</h2><div class="space-y-4">`; appState.history.forEach(w => { const date = new Date(w.startTime); html += ` <div class="card relative overflow-hidden"> <div class="absolute right-0 top-0 p-2 opacity-10"> <span class="text-6xl font-black">${w.analysis.grade}</span> </div> <div class="relative z-10"> <div class="flex justify-between items-baseline mb-1"> <h3 class="font-bold text-white text-lg">${w.dayName}</h3> <span class="text-xs text-gray-400">${date.toLocaleDateString()}</span> </div> <p class="text-sm text-gray-400 mb-2">${w.duration} min • ${(w.analysis.volume/1000).toFixed(1)} ton</p> <div class="flex flex-wrap gap-1"> ${w.exercises.slice(0, 3).map(e => `<span class="px-2 py-1 bg-gray-800 rounded text-[10px] text-gray-500 border border-gray-700">${e.name}</span>`).join('')} ${w.exercises.length > 3 ? `<span class="px-2 py-1 text-[10px] text-gray-600">+${w.exercises.length - 3}</span>` : ''} </div> </div> </div>`; }); html += `</div></div>`; container.innerHTML = html; } // 7. SETTINGS function renderSettings(container) { const totalWorkouts = appState.history.length; const totalTon = appState.history.reduce((acc, curr) => acc + (curr.analysis.volume || 0), 0) / 1000; container.innerHTML = ` <div class="fade-in pb-20"> <h2 class="text-2xl font-bold mb-6">Estatísticas</h2> <div class="grid grid-cols-2 gap-4 mb-8"> <div class="card text-center py-6"> <p class="text-3xl font-bold text-blue-500">${totalWorkouts}</p> <p class="text-[10px] uppercase text-gray-500 tracking-widest mt-1">Treinos</p> </div> <div class="card text-center py-6"> <p class="text-3xl font-bold text-purple-500">${totalTon.toFixed(0)}</p> <p class="text-[10px] uppercase text-gray-500 tracking-widest mt-1">Toneladas</p> </div> </div> <div class="card bg-red-900/20 border border-red-900/50"> <h3 class="text-red-500 font-bold mb-2">Zona de Perigo</h3> <p class="text-xs text-red-300 mb-4">Isso apagará todo seu histórico local permanentemente.</p> <button onclick="if(confirm('Tem certeza absoluta?')){localStorage.removeItem('hyperHistory'); location.reload();}" class="w-full py-2 bg-red-600 hover:bg-red-700 rounded text-white text-sm font-bold">RESETAR TUDO</button> </div> <p class="text-center text-xs text-gray-600 mt-8">HyperScience PWA v2.0</p> </div>`; } // INIT document.addEventListener('DOMContentLoaded', () => { router('home'); }); </script><script> // PWA Service Worker Registration if ('serviceWorker' in navigator) { navigator.serviceWorker.register('sw.js') .then(reg => console.log('SW registrado', reg)) .catch(err => console.log('Erro SW', err)); } </script></body> </html> Meu manifest.json: { "name": "HyperScience", "short_name": "HyperScience", "start_url": "./index.html", "display": "standalone", "background_color": "#111827", "theme_color": "#1f2937", "orientation": "portrait", "icons": [ { "src": "https://img.icons8.com/ios-filled/192/4a90e2/dumbbell.png", "sizes": "192x192", "type": "image/png" }, { "src": "https://img.icons8.com/ios-filled/512/4a90e2/dumbbell.png", "sizes": "512x512", "type": "image/png" } ] } Meu script.js: // --- DADOS CIENTÍFICOS & PRESETS --- const WORKOUT_PLANS = { 'ppl': { name: 'PPL (Push/Pull/Legs)', desc: 'Alta frequência, foco em sinergistas.', days: [ { id: 'push', name: 'Empurrar (Peito/Ombro/Tríceps)', exercises: ['Supino Reto (Barra/Halter)', 'Desenvolvimento Militar', 'Supino Inclinado', 'Elevação Lateral', 'Tríceps Polia'] }, { id: 'pull', name: 'Puxar (Costas/Bíceps/Trapézio)', exercises: ['Levantamento Terra', 'Puxada Alta ou Barra Fixa', 'Remada Curvada', 'Face Pull', 'Rosca Direta', 'Rosca Martelo'] }, { id: 'legs', name: 'Pernas (Completo)', exercises: ['Agachamento Livre', 'Leg Press', 'Stiff ou RDL', 'Cadeira Extensora', 'Mesa Flexora', 'Panturrilha em Pé'] } ] }, 'upper_lower': { name: 'Upper / Lower', desc: 'Equilíbrio perfeito para descanso.', days: [ { id: 'upper1', name: 'Superiores A (Foco Força)', exercises: ['Supino Reto', 'Remada Curvada', 'Desenvolvimento', 'Barra Fixa', 'Tríceps Testa', 'Rosca Direta'] }, { id: 'lower1', name: 'Inferiores A (Foco Agachamento)', exercises: ['Agachamento Livre', 'Afundo', 'Cadeira Extensora', 'Mesa Flexora', 'Panturrilha'] }, { id: 'upper2', name: 'Superiores B (Foco Hipertrofia)', exercises: ['Supino Inclinado Halter', 'Puxada Alta', 'Elevação Lateral', 'Peck Deck', 'Tríceps Corda', 'Rosca Scott'] }, { id: 'lower2', name: 'Inferiores B (Foco Posterior)', exercises: ['Levantamento Terra ou RDL', 'Leg Press', 'Mesa Flexora', 'Cadeira Adutora', 'Panturrilha Sentado'] } ] }, 'arnold': { name: 'Arnold Split', desc: 'Peito/Costas, Ombro/Braço, Perna.', days: [ { id: 'chest_back', name: 'Peito e Costas', exercises: ['Supino Reto', 'Barra Fixa', 'Supino Inclinado', 'Remada Curvada', 'Crucifixo', 'Pullover'] }, { id: 'delt_arm', name: 'Ombros e Braços', exercises: ['Desenvolvimento', 'Elevação Lateral', 'Rosca Direta', 'Tríceps Testa', 'Rosca Concentrada', 'Tríceps Francês'] }, { id: 'legs_abs', name: 'Pernas e Abdomem', exercises: ['Agachamento', 'Leg Press', 'Stiff', 'Extensora', 'Panturrilha', 'Abdominal Infra'] } ] } }; // --- ESTADO DO APP --- let appState = { currentPlan: null, history: JSON.parse(localStorage.getItem('hyperHistory')) || [], activeWorkout: null, startTime: null };
// --- ROTEAMENTO SIMPLES ---
function router(view, params = null) {
const app = document.getElementById('app');
app.innerHTML = '';

text

if (view === 'home') renderHome(app);
else if (view === 'workout_select') renderWorkoutSelect(app, params);
else if (view === 'active_session') renderActiveSession(app, params);
else if (view === 'history') renderHistory(app);
else if (view === 'result') renderResult(app, params);
else if (view === 'settings') renderSettings(app);
}

// --- VIEWS ---

function renderHome(container) {
let html = <div class="fade-in space-y-4"> <h2 class="text-2xl font-bold mb-4">Escolha sua Estratégia</h2>;

text

for (const [key, plan] of Object.entries(WORKOUT_PLANS)) {
html += <div onclick="router('workout_select', '${key}')" class="card active:scale-95 transition transform cursor-pointer border border-gray-700 hover:border-blue-500"> <h3 class="text-xl font-bold text-blue-400">${plan.name}</h3> <p class="text-gray-400 text-sm mt-1">${plan.desc}</p> </div>;
}

// Botão de Treino Rápido (Histórico recente)
if(appState.history.length > 0) {
html += <div class="mt-8 pt-4 border-t border-gray-700"> <h3 class="text-lg font-bold mb-2">Último Treino Realizado</h3> <div onclick="alert('Funcionalidade: Repetir último treino (em breve)')" class="card bg-gray-800 opacity-75"> <p class="text-sm">Repetir: ${new Date(appState.history[0].date).toLocaleDateString()}</p> </div> </div>;
}

html += </div>;
container.innerHTML = html;
}

function renderWorkoutSelect(container, planKey) {
const plan = WORKOUT_PLANS[planKey];
let html = <div class="fade-in pb-20"> <button onclick="router('home')" class="mb-4 text-blue-400 text-sm">← Voltar</button> <h2 class="text-2xl font-bold mb-4">${plan.name}</h2> <p class="mb-4 text-gray-400">Qual dia você vai treinar hoje?</p>;

text

plan.days.forEach((day, index) => {
// Truque para passar objeto como string no onclick (não ideal, mas funciona para copy/paste simples)
// Vamos apenas passar o índice e recriar o objeto
html += <div onclick="startWorkout('${planKey}', ${index})" class="card active:scale-95 transition cursor-pointer flex justify-between items-center"> <div> <h3 class="font-bold text-lg">${day.name}</h3> <p class="text-xs text-gray-500">${day.exercises.length} Exercícios</p> </div> <div class="bg-blue-600 rounded-full p-2"> <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> </div> </div>;
});

html += </div>;
container.innerHTML = html;
}

function startWorkout(planKey, dayIndex) {
const plan = WORKOUT_PLANS[planKey];
const day = plan.days[dayIndex];

text

appState.activeWorkout = {
planName: plan.name,
dayName: day.name,
exercises: day.exercises.map(ex => ({
name: ex,
sets: [{weight: '', reps: '', rpe: ''}] // Começa com 1 set vazio
})),
startTime: Date.now()
};
router('active_session');
}

function renderActiveSession(container) {
const workout = appState.activeWorkout;
let html = <div class="fade-in pb-24"> <div class="flex justify-between items-end mb-4"> <div> <h2 class="text-xl font-bold text-white">${workout.dayName}</h2> <p class="text-xs text-blue-400" id="timer">00:00</p> </div> <button onclick="finishWorkout()" class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">FINALIZAR</button> </div>;

text

workout.exercises.forEach((ex, exIndex) => {
html += `<div class="card border border-gray-700">
<h3 class="font-bold text-lg mb-2 text-blue-300">${ex.name}</h3>

text

    <div class="grid grid-cols-4 gap-2 text-xs text-gray-500 mb-1 text-center">
        <span>KG</span>
        <span>REPS</span>
        <span>RPE (1-10)</span>
        <span></span>
    </div>

    <div id="sets-container-${exIndex}">`;
    
ex.sets.forEach((set, setIndex) => {
    html += renderSetRow(exIndex, setIndex, set);
});

html += `</div>
    <button onclick="addSet(${exIndex})" class="w-full mt-3 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm text-blue-300 font-bold">+ Adicionar Série</button>
</div>`;
});

html += </div>;
container.innerHTML = html;

// Iniciar Timer
if(!window.workoutTimer) {
window.workoutTimer = setInterval(() => {
const diff = Math.floor((Date.now() - appState.activeWorkout.startTime) / 1000);
const m = Math.floor(diff / 60).toString().padStart(2, '0');
const s = (diff % 60).toString().padStart(2, '0');
const el = document.getElementById('timer');
if(el) el.innerText = ${m}:${s};
}, 1000);
}
}

function renderSetRow(exIndex, setIndex, setVal) {
return <div class="grid grid-cols-4 gap-2 mb-2 items-center"> <input type="number" placeholder="kg" value="${setVal.weight}" onchange="updateSet(${exIndex}, ${setIndex}, 'weight', this.value)"> <input type="number" placeholder="reps" value="${setVal.reps}" onchange="updateSet(${exIndex}, ${setIndex}, 'reps', this.value)"> <input type="number" placeholder="7-10" value="${setVal.rpe}" max="10" class="${setVal.rpe >= 9 ? 'text-red-400 border-red-900' : ''}" onchange="updateSet(${exIndex}, ${setIndex}, 'rpe', this.value)"> <button onclick="removeSet(${exIndex}, ${setIndex})" class="text-red-500 font-bold text-xl">×</button> </div>;
}

// --- LÓGICA DE INPUT E DADOS ---

window.updateSet = (exIndex, setIndex, field, value) => {
appState.activeWorkout.exercises[exIndex].sets[setIndex][field] = value;
};

window.addSet = (exIndex) => {
const prevSet = appState.activeWorkout.exercises[exIndex].sets[appState.activeWorkout.exercises[exIndex].sets.length - 1];
// Copia os dados do set anterior para facilitar
appState.activeWorkout.exercises[exIndex].sets.push({...prevSet});
router('active_session'); // Re-renderiza (bruto, mas funciona para vanilla)
};

window.removeSet = (exIndex, setIndex) => {
if(appState.activeWorkout.exercises[exIndex].sets.length > 1) {
appState.activeWorkout.exercises[exIndex].sets.splice(setIndex, 1);
router('active_session');
}
};

window.finishWorkout = () => {
if(!confirm("Finalizar treino e gerar relatório?")) return;
clearInterval(window.workoutTimer);
window.workoutTimer = null;

text

const workout = appState.activeWorkout;
workout.endTime = Date.now();
workout.duration = Math.floor((workout.endTime - workout.startTime) / 1000 / 60); // min

// ANÁLISE CRÍTICA (O ALGORITMO)
const analysis = analyzeWorkout(workout);

// Salvar
workout.analysis = analysis;
appState.history.unshift(workout);
localStorage.setItem('hyperHistory', JSON.stringify(appState.history));

appState.activeWorkout = null;
router('result', workout);
};

// --- O JUIZ SINCERO (ALGORITMO) ---
function analyzeWorkout(workout) {
let totalSets = 0;
let hardSets = 0; // RPE >= 7
let failureSets = 0; // RPE >= 9
let totalVolume = 0;
let missedData = 0;

text

workout.exercises.forEach(ex => {
ex.sets.forEach(set => {
if(!set.weight || !set.reps) {
missedData++;
return;
}
const w = parseFloat(set.weight);
const r = parseFloat(set.reps);
const rpe = parseFloat(set.rpe) || 0;

text

    totalSets++;
    totalVolume += w * r;

    if(rpe >= 7) hardSets++;
    if(rpe >= 9) failureSets++;
});
});

// Calcular Nota
let score = 0;
let feedback = [];
let grade = "C";

// 1. Consistência
if(missedData > 0) feedback.push("❌ Você esqueceu de anotar cargas em alguns exercícios.");

// 2. Intensidade (RPE) - O mais importante cientificamente
const intensityRatio = totalSets > 0 ? hardSets / totalSets : 0;

if (intensityRatio >= 0.8) {
score += 40;
feedback.push("🔥 Intensidade Excelente! A maioria das séries foi efetiva.");
} else if (intensityRatio >= 0.5) {
score += 20;
feedback.push("⚠️ Intensidade Média. Muitas séries longe da falha (Junk Volume).");
} else {
feedback.push("💩 Intensidade Baixa. Você foi treinar ou passear? Aumente a carga.");
}

// 3. Volume
if(totalSets >= 10 && totalSets <= 25) {
score += 30;
feedback.push("✅ Volume de treino dentro do ideal por sessão.");
} else if (totalSets < 10) {
feedback.push("📉 Volume baixo. Poderia ter feito mais exercícios.");
} else {
feedback.push("🛑 Volume excessivo. Cuidado com o overtraining.");
}

// 4. Falha
if (failureSets > 0) {
score += 30;
feedback.push("💪 Você atingiu a falha técnica em algumas séries. Ótimo estímulo.");
}

// Gerar Conceito
if (score >= 90) grade = "S (GOD)";
else if (score >= 70) grade = "A (Bom)";
else if (score >= 50) grade = "B (Médio)";
else if (score >= 30) grade = "C (Fraco)";
else grade = "D (Vergonhoso)";

return { grade, feedback, totalVolume, totalSets };
}

function renderResult(container, workout) {
const colorClass = workout.analysis.grade.includes('S') || workout.analysis.grade.includes('A') ? 'text-green-400' : (workout.analysis.grade.includes('D') ? 'text-red-500' : 'text-yellow-400');

text

let html = `<div class="fade-in pb-20 pt-4 text-center">
<h2 class="text-3xl font-bold mb-2">Relatório Brutal</h2>
<p class="text-gray-400 mb-6">Duração: ${workout.duration} min</p>

text

<div class="card bg-gray-800 border-2 border-gray-600 mb-6">
    <p class="text-sm text-gray-400 uppercase tracking-widest mb-2">Sua Nota</p>
    <h1 class="text-6xl font-black ${colorClass}">${workout.analysis.grade}</h1>
</div>

<div class="text-left space-y-3 mb-8">
    ${workout.analysis.feedback.map(f => `<p class="p-3 bg-gray-800 rounded border-l-4 border-blue-500 text-sm">${f}</p>`).join('')}
</div>

<div class="grid grid-cols-2 gap-4 mb-8">
    <div class="card bg-gray-800">
        <p class="text-xs text-gray-500">Volume Total</p>
        <p class="text-xl font-bold text-white">${(workout.analysis.totalVolume / 1000).toFixed(1)} <span class="text-sm text-gray-500">ton</span></p>
    </div>
    <div class="card bg-gray-800">
        <p class="text-xs text-gray-500">Séries Totais</p>
        <p class="text-xl font-bold text-white">${workout.analysis.totalSets}</p>
    </div>
</div>

<button onclick="router('home')" class="w-full bg-blue-600 py-4 rounded-xl font-bold text-white shadow-lg text-lg">VOLTAR AO INÍCIO</button>
</div>`;
container.innerHTML = html;
}

function renderHistory(container) {
if(appState.history.length === 0) {
container.innerHTML = <div class="fade-in text-center mt-20 text-gray-500"><p>Nenhum treino realizado ainda.</p><p>Vá puxar ferro!</p></div>;
return;
}

text

let html = <div class="fade-in space-y-4 pb-20"> <h2 class="text-2xl font-bold mb-4">Seu Histórico</h2>;

appState.history.forEach(w => {
html += <div class="card"> <div class="flex justify-between items-start"> <div> <h3 class="font-bold text-white">${w.dayName}</h3> <p class="text-xs text-gray-400">${new Date(w.startTime).toLocaleDateString()} • ${w.duration} min</p> </div> <div class="text-right"> <span class="text-xl font-bold ${w.analysis.grade.includes('A') || w.analysis.grade.includes('S') ? 'text-green-400' : 'text-yellow-400'}">${w.analysis.grade}</span> </div> </div> <p class="text-xs text-gray-500 mt-2">Volume: ${(w.analysis.totalVolume/1000).toFixed(1)} ton</p> </div>;
});

html += </div>;
container.innerHTML = html;
}

function renderSettings(container) {
const totalWorkouts = appState.history.length;
const totalTons = appState.history.reduce((acc, curr) => acc + curr.analysis.totalVolume, 0) / 1000;

text

container.innerHTML = `<div class="fade-in pb-20">
<h2 class="text-2xl font-bold mb-6">Estatísticas Gerais</h2>

text

<div class="card text-center py-8">
    <p class="text-4xl font-bold text-blue-500">${totalWorkouts}</p>
    <p class="text-gray-400 uppercase text-xs tracking-widest">Treinos Concluídos</p>
</div>

<div class="card text-center py-8">
    <p class="text-4xl font-bold text-purple-500">${totalTons.toFixed(1)}</p>
    <p class="text-gray-400 uppercase text-xs tracking-widest">Toneladas Levantadas (Total)</p>
</div>

<div class="mt-8">
    <button onclick="if(confirm('Apagar tudo?')){localStorage.clear(); location.reload();}" class="w-full border border-red-600 text-red-500 py-3 rounded-lg font-bold">RESETAR DADOS</button>
    <p class="text-xs text-gray-600 text-center mt-2">Cuidado: Isso apaga seu histórico local.</p>
</div>
</div>`; }
// Inicialização
document.addEventListener('DOMContentLoaded', () => {
router('home');
});
Meu style.css: body {
-webkit-tap-highlight-color: transparent;
overscroll-behavior-y: none;
}
.safe-area-pb {
padding-bottom: env(safe-area-inset-bottom);
}
/* Animação suave */
.fade-in {
animation: fadeIn 0.3s ease-in-out;
}
@keyframes fadeIn {
from { opacity: 0; transform: translateY(10px); }
to { opacity: 1; transform: translateY(0); }
}
.card {
background: #1f2937;
border-radius: 1rem;
padding: 1rem;
margin-bottom: 1rem;
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
input[type="number"] {
background: #374151;
color: white;
border: 1px solid #4b5563;
border-radius: 0.5rem;
padding: 0.5rem;
width: 100%;
text-align: center;
font-size: 1.2rem;
}
.grade-A { color: #34d399; }
.grade-B { color: #60a5fa; }
.grade-C { color: #fbbf24; }
.grade-D { color: #f87171; }
Meu sw.js: const CACHE_NAME = 'hyperscience-v2-singlefile';
const urlsToCache = [
'./',
'./index.html',
'./manifest.json',
'https://cdn.tailwindcss.com'
];

self.addEventListener('install', event => {
self.skipWaiting();
event.waitUntil(
caches.open(CACHE_NAME)
.then(cache => cache.addAll(urlsToCache))
);
});
self.addEventListener('activate', event => {
event.waitUntil(
caches.keys().then(cacheNames => {
return Promise.all(
cacheNames.map(cacheName => {
if (cacheName !== CACHE_NAME) {
return caches.delete(cacheName);
}
})
);
})
);
self.clients.claim();
});

self.addEventListener('fetch', event => {
event.respondWith(
caches.match(event.request)
.then(response => {
if (response) return response;
return fetch(event.request).then(
response => {
if(!response || response.status !== 200 || response.type !== 'basic') {
return response;
}
var responseToCache = response.clone();
caches.open(CACHE_NAME)
.then(cache => {
cache.put(event.request, responseToCache);
});
return response;
}
);
})
);
});

O que acha que devo aprimorar, otimizar ou implementar para torna-lo "perfeito"?
Queria adicionar Eu quero que faça tudo que tiver no seu alcance e mais um pouco, quero que faça todas as modificações adequadas para um nível de elite. Eu queria uma nova atualização inovadora, oque você me sugere fazer para criar um app completo, praticamente "perfeito"? EU gostaria que desse uma olhada nos arquivos dele e me desse um a resposta. E outra, eu queria que, quando eu terminasse um treino ele me desse um relatório mais completo sobre o meu treino, quero saber se foi bom, ruim, se foi eficiente e enfim. Outra coisa, gostaria de ter uma maneira de remover algum exercício durante o treino, porque as vezes não da tempo de faze-lo completamente, e isso interfere no meu resultado, não gosto de ser "obrigado" a fazer um exercício se eu não tiver tempo. E quero que faça de um jeito que eu possa apenas copiar e colar no GitHub de maneira fácil. Diagnóstico real
Não só “nota”, mas:
Eficiência
Densidade
Qualidade de estímulo
Distribuição de volume
Índice de esforço real
✅ Liberdade total
Remover exercício no meio do treino
Ignorar exercício sem penalização
Auto-save de sessão
Recuperar treino interrompido
✅ Inteligência
Detectar junk volume
Detectar intensidade insuficiente
Detectar overreaching
Avaliar densidade do treino
Classificar eficiência real
Vamos implementar isso agora conceitualmente.
2. NOVO SISTEMA DE RELATÓRIO — NÍVEL CIENTÍFICO
3. REMOVER EXERCÍCIO DURANTE O TREINO
Você quer liberdade.
Implementação simples e elegante:
Dentro de renderActiveSession, adicione um botão:
<button onclick="removeExercise(${exIdx})" class="absolute top-2 right-2 text-red-500 text-xs">
Remover
</button>
E a função:
window.removeExercise = (exIdx) => {
if(confirm("Remover este exercício do treino?")) {
appState.activeWorkout.exercises.splice(exIdx, 1);
renderActiveSession(document.getElementById('app'));
}
};
Agora:
Não afeta nota
Não penaliza
Remove completamente do cálculo
Liberdade total.
Vamos transformar seu analyzeWorkout() em algo de elite.
📊 Métricas que você DEVE calcular
1️⃣ Volume Total
Já tem.
2️⃣ Total de Séries Válidas
Já tem.
3️⃣ Hard Sets (RPE ≥ 8)
4️⃣ Densidade do Treino
densidade = volume / duração
Volume por minuto.
Isso mostra eficiência real.
5️⃣ Eficiência de Estímulo
Fórmula:
eficiência = hardSets / totalSets
Classificação:
0.75 → Estímulo Excelente
0.5–0.75 → Bom
0.3–0.5 → Médio
< 0.3 → Muito fraco
6️⃣ Índice de Intensidade Média
mediaRPE = somaRPE / totalSets
7️⃣ Junk Volume Detector
Se

TotalSets alto

Eficiência baixa

→ Você treinou demais longe da falha.

8️⃣ Classificação final REAL
Agora a nota não pode depender só de intensidade.
Nova fórmula de score:
Intensidade: 40%
Volume ideal: 25%
Densidade: 20%
Consistência (dados preenchidos): 15%
Isso gera uma nota científica.
6. Relatório Final — Exemplo do que você deve exibir
Após treino, mostrar:
📊 RELATÓRIO COMPLETO
Duração
Volume total
Séries válidas
Hard sets
Intensidade média
Densidade (kg/min)
Eficiência (%)
Classificação
🧠 Diagnóstico automático
Exemplos:
🔥 Excelente estímulo hipertrófico.
⚠️ Muito volume longe da falha (junk volume).
📉 Densidade baixa — muito descanso?
💪 Ótimo controle de esforço.
🧬 7. Atualização Inovadora (O Diferencial)
Agora vem o nível realmente inovador:
🔥 Índice de Performance Neural (IPN)
Criar um índice baseado em:
% de séries RPE 9–10
Densidade
Volume
Ele estima:
Treino mais voltado a força
Mais voltado a hipertrofia
Mais metabólico
Isso vira diferencial absurdo.
QUERO APENAS OS CÓDIGOS PRA MIM COPIAR E COLAR NO GITHUB DE FORMA FACIL. SE PRECISO RE-ESCREVA TODOS OS ARQUIVOS

Something went wrong while generating the response. Please try again.

Clear
quero que dê uma olhada no meu PWA.
meu index.html: <!DOCTYPE html>

<html lang="pt-BR"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"> <title>HyperScience PWA 2.0</title> <link rel="manifest" href="manifest.json"> <script src="https://cdn.tailwindcss.com"></script> text<!-- Ícone para iOS --><link rel="apple-touch-icon" href="https://img.icons8.com/ios-filled/180/4a90e2/dumbbell.png"> <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"> <meta name="apple-mobile-web-app-capable" content="yes"><style> body { -webkit-tap-highlight-color: transparent; overscroll-behavior-y: none; background-color: #111827; color: #f3f4f6; } .safe-area-pb { padding-bottom: env(safe-area-inset-bottom); } /* Animações */ .fade-in { animation: fadeIn 0.3s ease-in-out; } @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } } .card { background: #1f2937; border-radius: 1rem; padding: 1rem; margin-bottom: 1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); transition: all 0.2s; } .card:active { transform: scale(0.98); } /* Inputs */ input[type="number"] { background: #374151; color: white; border: 1px solid #4b5563; border-radius: 0.5rem; padding: 0.5rem; width: 100%; text-align: center; font-size: 1.1rem; } input:focus { outline: 2px solid #60a5fa; border-color: transparent; } /* Modal */ #modal-overlay { background: rgba(0,0,0,0.8); backdrop-filter: blur(4px); } </style></head> <body class="font-sans antialiased pb-24 select-none"> text<!-- Header --><header class="fixed top-0 w-full bg-gray-800 p-4 shadow-lg z-40 flex justify-between items-center border-b border-gray-700"> <h1 class="text-xl font-bold text-blue-400 tracking-tighter cursor-pointer" onclick="router('home')">HYPER<span class="text-white">SCIENCE</span></h1> <div class="flex items-center gap-2"> <span id="page-title" class="text-xs text-gray-400 font-mono">BETA</span> <div id="status-indicator" class="w-2 h-2 rounded-full bg-green-500"></div> </div> </header><!-- Main Content --><main class="mt-20 px-4 container mx-auto max-w-md" id="app"> <!-- Views injetadas aqui --> </main><!-- Modal de Troca de Exercício --><div id="swap-modal" class="hidden fixed inset-0 z-50 flex items-end sm:items-center justify-center pointer-events-none"> <div id="modal-overlay" class="absolute inset-0 pointer-events-auto" onclick="closeModal()"></div> <div class="bg-gray-800 w-full max-w-md p-6 rounded-t-2xl sm:rounded-xl relative z-10 transform transition-transform pointer-events-auto border-t border-gray-600 shadow-2xl"> <div class="flex justify-between items-center mb-4"> <h3 class="text-xl font-bold text-white">Substituir Exercício</h3> <button onclick="closeModal()" class="text-gray-400 hover:text-white text-2xl">&times;</button> </div> <p class="text-sm text-gray-400 mb-4">Selecione uma variação biomecânica equivalente:</p> <div id="swap-list" class="space-y-2 max-h-[60vh] overflow-y-auto pr-2"> <!-- Lista gerada via JS --> </div> </div> </div><!-- Navigation --><nav class="fixed bottom-0 w-full bg-gray-800 border-t border-gray-700 flex justify-around py-3 z-40 safe-area-pb"> <button onclick="router('home')" class="nav-btn flex flex-col items-center text-gray-400 hover:text-blue-400 transition"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg> <span class="text-[10px] mt-1 uppercase tracking-wider">Treinar</span> </button> <button onclick="router('history')" class="nav-btn flex flex-col items-center text-gray-400 hover:text-blue-400 transition"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg> <span class="text-[10px] mt-1 uppercase tracking-wider">Histórico</span> </button> <button onclick="router('settings')" class="nav-btn flex flex-col items-center text-gray-400 hover:text-blue-400 transition"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> <span class="text-[10px] mt-1 uppercase tracking-wider">Dados</span> </button> </nav><script> // ========================================== // DADOS CIENTÍFICOS & EXERCÍCIOS // ========================================== // Categoria de Movimento (Pattern) const EXERCISE_DB = { 'horizontal_push': { name: 'Empurrar Horizontal (Peito)', exercises: ['Supino Reto (Barra)', 'Supino Reto (Halteres)', 'Supino Máquina', 'Flexão de Braço', 'Supino Smith'] }, 'incline_push': { name: 'Empurrar Inclinado (Superior)', exercises: ['Supino Inclinado (Halteres)', 'Supino Inclinado (Barra)', 'Supino Inclinado Máquina', 'Smith Inclinado'] }, 'vertical_push': { name: 'Empurrar Vertical (Ombros)', exercises: ['Desenvolvimento (Halteres)', 'Desenvolvimento Militar (Barra)', 'Desenvolvimento Máquina', 'Elevação Frontal'] }, 'isolation_chest': { name: 'Isolamento Peito', exercises: ['Crucifixo (Peck Deck)', 'Crucifixo (Halteres)', 'Crossover Polia Alta', 'Crossover Polia Baixa'] }, 'isolation_delt': { name: 'Isolamento Ombro', exercises: ['Elevação Lateral (Halteres)', 'Elevação Lateral (Polia)', 'Elevação Lateral (Máquina)', 'Face Pull'] }, 'triceps': { name: 'Tríceps', exercises: ['Tríceps Polia (Corda)', 'Tríceps Testa', 'Tríceps Francês', 'Paralelas', 'Tríceps Coice'] }, 'vertical_pull': { name: 'Puxada Vertical (Dorsal)', exercises: ['Puxada Alta (Frente)', 'Barra Fixa', 'Puxada Triângulo', 'Graviton'] }, 'horizontal_pull': { name: 'Remada (Espessura)', exercises: ['Remada Curvada (Barra)', 'Remada Unilateral (Serrote)', 'Remada Baixa (Triângulo)', 'Remada Máquina'] }, 'biceps': { name: 'Bíceps', exercises: ['Rosca Direta (Barra)', 'Rosca Alternada (Halteres)', 'Rosca Scott', 'Rosca Martelo', 'Rosca Polia'] }, 'squat_pattern': { name: 'Agachamento (Quadríceps)', exercises: ['Agachamento Livre', 'Leg Press 45', 'Hack Machine', 'Agachamento Búlgaro', 'Passada'] }, 'hinge_pattern': { name: 'Extensão de Quadril (Posterior)', exercises: ['Levantamento Terra', 'Stiff', 'RDL (Romanian Deadlift)', 'Elevação Pélvica'] }, 'isolation_leg': { name: 'Isolamento Perna', exercises: ['Cadeira Extensora', 'Mesa Flexora', 'Cadeira Flexora', 'Cadeira Adutora'] }, 'calves': { name: 'Panturrilhas', exercises: ['Panturrilha em Pé', 'Panturrilha Sentado', 'Panturrilha Leg Press'] }, 'abs': { name: 'Abdômen', exercises: ['Abdominal Infra', 'Abdominal Supra (Máquina)', 'Prancha', 'Lenhador (Polia)'] } }; const WORKOUT_PLANS = { 'ppl': { name: 'PPL (Push/Pull/Legs)', desc: 'Alta frequência, divisão clássica.', days: [ { id: 'push', name: 'Empurrar (Peito/Ombro/Tríceps)', default_exercises: [ { cat: 'horizontal_push', ex: 'Supino Reto (Barra)' }, { cat: 'incline_push', ex: 'Supino Inclinado (Halteres)' }, { cat: 'vertical_push', ex: 'Desenvolvimento (Halteres)' }, { cat: 'isolation_delt', ex: 'Elevação Lateral (Halteres)' }, { cat: 'isolation_chest', ex: 'Crucifixo (Peck Deck)' }, { cat: 'triceps', ex: 'Tríceps Polia (Corda)' } ] }, { id: 'pull', name: 'Puxar (Costas/Bíceps)', default_exercises: [ { cat: 'vertical_pull', ex: 'Puxada Alta (Frente)' }, { cat: 'horizontal_pull', ex: 'Remada Curvada (Barra)' }, { cat: 'horizontal_pull', ex: 'Remada Baixa (Triângulo)' }, { cat: 'isolation_delt', ex: 'Face Pull' }, { cat: 'biceps', ex: 'Rosca Direta (Barra)' }, { cat: 'biceps', ex: 'Rosca Martelo' } ] }, { id: 'legs', name: 'Pernas Completo', default_exercises: [ { cat: 'squat_pattern', ex: 'Agachamento Livre' }, { cat: 'squat_pattern', ex: 'Leg Press 45' }, { cat: 'hinge_pattern', ex: 'Stiff' }, { cat: 'isolation_leg', ex: 'Cadeira Extensora' }, { cat: 'isolation_leg', ex: 'Mesa Flexora' }, { cat: 'calves', ex: 'Panturrilha em Pé' } ] } ] }, 'upper_lower': { name: 'Upper / Lower', desc: 'Foco em força e descanso.', days: [ { id: 'upper', name: 'Superiores', default_exercises: [ { cat: 'horizontal_push', ex: 'Supino Reto (Barra)' }, { cat: 'horizontal_pull', ex: 'Remada Curvada (Barra)' }, { cat: 'vertical_push', ex: 'Desenvolvimento Militar (Barra)' }, { cat: 'vertical_pull', ex: 'Barra Fixa' }, { cat: 'triceps', ex: 'Tríceps Testa' }, { cat: 'biceps', ex: 'Rosca Direta (Barra)' } ] }, { id: 'lower', name: 'Inferiores', default_exercises: [ { cat: 'squat_pattern', ex: 'Agachamento Livre' }, { cat: 'hinge_pattern', ex: 'Levantamento Terra' }, { cat: 'squat_pattern', ex: 'Passada' }, { cat: 'isolation_leg', ex: 'Cadeira Extensora' }, { cat: 'calves', ex: 'Panturrilha Sentado' }, { cat: 'abs', ex: 'Abdominal Infra' } ] } ] }, 'arnold': { name: 'Arnold Split', desc: 'Peito+Costas, Ombros+Braços.', days: [ { id: 'chest_back', name: 'Peito e Costas', default_exercises: [ { cat: 'horizontal_push', ex: 'Supino Reto (Barra)' }, { cat: 'horizontal_pull', ex: 'Barra Fixa' }, { cat: 'incline_push', ex: 'Supino Inclinado (Halteres)' }, { cat: 'horizontal_pull', ex: 'Remada Unilateral (Serrote)' }, { cat: 'isolation_chest', ex: 'Crucifixo (Halteres)' } ] }, { id: 'delt_arm', name: 'Ombros e Braços', default_exercises: [ { cat: 'vertical_push', ex: 'Desenvolvimento (Halteres)' }, { cat: 'isolation_delt', ex: 'Elevação Lateral (Polia)' }, { cat: 'biceps', ex: 'Rosca Direta (Barra)' }, { cat: 'triceps', ex: 'Tríceps Francês' }, { cat: 'biceps', ex: 'Rosca Scott' }, { cat: 'triceps', ex: 'Tríceps Polia (Corda)' } ] }, { id: 'leg', name: 'Pernas', default_exercises: [ { cat: 'squat_pattern', ex: 'Agachamento Livre' }, { cat: 'hinge_pattern', ex: 'RDL (Romanian Deadlift)' }, { cat: 'squat_pattern', ex: 'Leg Press 45' }, { cat: 'isolation_leg', ex: 'Cadeira Extensora' }, { cat: 'isolation_leg', ex: 'Mesa Flexora' } ] } ] } }; // ========================================== // ESTADO GLOBAL DO APP // ========================================== let appState = { currentPlanKey: null, tempWorkoutSetup: null, // Usado na tela de personalização activeWorkout: null, // Treino em andamento history: JSON.parse(localStorage.getItem('hyperHistory')) || [], settings: { theme: 'dark' } }; // Salvar histórico automaticamente function saveHistory() { localStorage.setItem('hyperHistory', JSON.stringify(appState.history)); } // ========================================== // ROTEAMENTO & VIEWS // ========================================== function router(view, params = null) { const app = document.getElementById('app'); app.innerHTML = ''; // Limpa tela // Highlight na nav document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('text-blue-400')); if (view === 'home') { renderHome(app); document.querySelectorAll('.nav-btn')[0].classList.add('text-blue-400'); } else if (view === 'plan_days') renderPlanDays(app, params); else if (view === 'workout_setup') renderWorkoutSetup(app, params); else if (view === 'active_session') renderActiveSession(app); else if (view === 'result') renderResult(app, params); else if (view === 'history') { renderHistory(app); document.querySelectorAll('.nav-btn')[1].classList.add('text-blue-400'); } else if (view === 'settings') { renderSettings(app); document.querySelectorAll('.nav-btn')[2].classList.add('text-blue-400'); } } // 1. HOME VIEW function renderHome(container) { let html = ` <div class="fade-in pb-20"> <div class="mb-6"> <h2 class="text-2xl font-bold text-white mb-1">Escolha sua Estratégia</h2> <p class="text-gray-400 text-sm">Selecione um plano baseado na ciência.</p> </div>`; // Botão Repetir Último Treino if (appState.history.length > 0) { const last = appState.history[0]; html += ` <div onclick="repeatLastWorkout()" class="mb-8 p-4 bg-gradient-to-r from-blue-900 to-gray-800 rounded-xl border border-blue-700 cursor-pointer shadow-lg active:scale-95 transition transform"> <div class="flex justify-between items-center mb-2"> <span class="bg-blue-600 text-xs font-bold px-2 py-1 rounded text-white">REPETIR ÚLTIMO</span> <span class="text-xs text-blue-200">${new Date(last.startTime).toLocaleDateString()}</span> </div> <h3 class="font-bold text-lg text-white">${last.dayName}</h3> <p class="text-xs text-gray-300 mt-1">${last.exercises.length} exercícios realizados</p> </div>`; } // Lista de Planos for (const [key, plan] of Object.entries(WORKOUT_PLANS)) { html += ` <div onclick="router('plan_days', '${key}')" class="card cursor-pointer border border-gray-700 hover:border-blue-500 group"> <div class="flex justify-between items-center"> <h3 class="text-xl font-bold text-blue-400 group-hover:text-blue-300">${plan.name}</h3> <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg> </div> <p class="text-gray-400 text-sm mt-2">${plan.desc}</p> </div>`; } html += `</div>`; container.innerHTML = html; } // 2. SELEÇÃO DE DIAS function renderPlanDays(container, planKey) { const plan = WORKOUT_PLANS[planKey]; let html = ` <div class="fade-in"> <button onclick="router('home')" class="mb-4 text-gray-400 text-sm flex items-center hover:text-white"> <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg> Voltar </button> <h2 class="text-2xl font-bold mb-6">${plan.name}</h2> <div class="space-y-3">`; plan.days.forEach((day, idx) => { html += ` <div onclick="initSetup('${planKey}', ${idx})" class="card cursor-pointer active:scale-95 flex items-center justify-between"> <div> <h3 class="font-bold text-lg text-white">${day.name}</h3> <p class="text-xs text-gray-500">${day.default_exercises.length} Exercícios Padrão</p> </div> <div class="bg-gray-700 p-2 rounded-full"> <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> </div> </div>`; }); html += `</div></div>`; container.innerHTML = html; } // 3. SETUP & CUSTOMIZAÇÃO (Onde a mágica acontece) function initSetup(planKey, dayIndex) { const dayData = WORKOUT_PLANS[planKey].days[dayIndex]; // Clona os exercícios padrão para uma lista editável appState.tempWorkoutSetup = { planName: WORKOUT_PLANS[planKey].name, dayName: dayData.name, exercises: dayData.default_exercises.map(item => ({ name: item.ex, category: item.cat, // Mantém a categoria para permitir trocas inteligentes sets: [{weight: '', reps: '', rpe: ''}] })) }; router('workout_setup'); } function renderWorkoutSetup(container) { const setup = appState.tempWorkoutSetup; let html = ` <div class="fade-in pb-24"> <h2 class="text-xl font-bold mb-2">Personalizar Treino</h2> <p class="text-sm text-gray-400 mb-6">Toque em um exercício para substituí-lo por uma variação equivalente.</p> <div class="space-y-3 mb-8">`; setup.exercises.forEach((ex, idx) => { const catName = EXERCISE_DB[ex.category] ? EXERCISE_DB[ex.category].name : 'Geral'; html += ` <div onclick="openSwapModal(${idx})" class="card border border-gray-700 hover:border-blue-500 cursor-pointer flex justify-between items-center group"> <div> <p class="text-[10px] text-blue-400 uppercase tracking-wide font-bold mb-1">${catName}</p> <h3 class="font-bold text-white group-hover:text-blue-300 transition">${ex.name}</h3> </div> <svg class="w-5 h-5 text-gray-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg> </div>`; }); html += ` </div> <button onclick="startActiveSession()" class="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl shadow-lg transform transition active:scale-95 flex justify-center items-center text-lg"> INICIAR TREINO </button> </div>`; container.innerHTML = html; } // 3.1 MODAL DE TROCA let currentSwapIndex = null; function openSwapModal(index) { currentSwapIndex = index; const exData = appState.tempWorkoutSetup.exercises[index]; const categoryData = EXERCISE_DB[exData.category]; if(!categoryData) { alert("Este exercício não tem variações cadastradas."); return; } const listEl = document.getElementById('swap-list'); listEl.innerHTML = categoryData.exercises.map(exName => ` <div onclick="confirmSwap('${exName}')" class="p-3 rounded bg-gray-700 hover:bg-gray-600 cursor-pointer flex justify-between items-center ${exName === exData.name ? 'border border-blue-500' : ''}"> <span class="text-white font-medium">${exName}</span> ${exName === exData.name ? '<span class="text-xs text-blue-400">Atual</span>' : ''} </div> `).join(''); document.getElementById('swap-modal').classList.remove('hidden'); document.getElementById('swap-modal').classList.add('flex'); } function closeModal() { document.getElementById('swap-modal').classList.add('hidden'); document.getElementById('swap-modal').classList.remove('flex'); currentSwapIndex = null; } function confirmSwap(newName) { if (currentSwapIndex !== null) { appState.tempWorkoutSetup.exercises[currentSwapIndex].name = newName; router('workout_setup'); // Re-renderiza para mostrar o novo nome } closeModal(); } // 4. SESSÃO ATIVA function startActiveSession() { // Copia o setup para o treino ativo appState.activeWorkout = JSON.parse(JSON.stringify(appState.tempWorkoutSetup)); appState.activeWorkout.startTime = Date.now(); router('active_session'); } function repeatLastWorkout() { if(appState.history.length === 0) return; const last = appState.history[0]; // Recria a estrutura baseada no histórico, mas limpa os valores das séries const newSession = { planName: last.planName, dayName: last.dayName, exercises: last.exercises.map(ex => ({ name: ex.name, category: ex.category || 'unknown', // Fallback sets: [{weight: '', reps: '', rpe: ''}] })), startTime: Date.now() }; appState.activeWorkout = newSession; router('active_session'); } function renderActiveSession(container) { const workout = appState.activeWorkout; let html = ` <div class="fade-in pb-24"> <div class="sticky top-16 bg-gray-900 pt-2 pb-4 z-30 flex justify-between items-end border-b border-gray-800 mb-4"> <div> <h2 class="text-lg font-bold text-white leading-tight">${workout.dayName}</h2> <p class="text-xs text-blue-400 font-mono mt-1" id="timer">00:00</p> </div> <button onclick="finishWorkout()" class="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow hover:bg-red-700">FINALIZAR</button> </div>`; workout.exercises.forEach((ex, exIdx) => { html += ` <div class="card border border-gray-700 relative"> <div class="mb-3"> <h3 class="font-bold text-lg text-blue-300">${ex.name}</h3> </div> <div class="grid grid-cols-[1fr_1fr_1fr_30px] gap-2 text-[10px] text-gray-500 uppercase font-bold text-center mb-2"> <span>KG</span> <span>REPS</span> <span>RPE</span> <span></span> </div> <div id="sets-container-${exIdx}" class="space-y-2">`; ex.sets.forEach((set, setIdx) => { html += ` <div class="grid grid-cols-[1fr_1fr_1fr_30px] gap-2 items-center"> <input type="number" placeholder="-" value="${set.weight}" onchange="updateSet(${exIdx}, ${setIdx}, 'weight', this.value)"> <input type="number" placeholder="-" value="${set.reps}" onchange="updateSet(${exIdx}, ${setIdx}, 'reps', this.value)"> <input type="number" placeholder="-" value="${set.rpe}" class="${set.rpe >= 9 ? 'text-red-400 border-red-900' : ''}" onchange="updateSet(${exIdx}, ${setIdx}, 'rpe', this.value)"> <button onclick="removeSet(${exIdx}, ${setIdx})" class="text-gray-600 hover:text-red-500 flex justify-center"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg> </button> </div>`; }); html += ` </div> <button onclick="addSet(${exIdx})" class="w-full mt-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 border-dashed rounded text-xs text-gray-400 font-bold uppercase tracking-widest">+ Série</button> </div>`; }); html += `</div>`; container.innerHTML = html; startTimer(); } // Lógica de Inputs e Sets window.updateSet = (exIdx, setIdx, field, val) => { appState.activeWorkout.exercises[exIdx].sets[setIdx][field] = val; }; window.addSet = (exIdx) => { const prev = appState.activeWorkout.exercises[exIdx].sets; const lastSet = prev[prev.length - 1]; // Copia peso e reps do anterior para agilizar prev.push({ weight: lastSet.weight, reps: lastSet.reps, rpe: '' }); renderActiveSession(document.getElementById('app')); }; window.removeSet = (exIdx, setIdx) => { const sets = appState.activeWorkout.exercises[exIdx].sets; if(sets.length > 1) { sets.splice(setIdx, 1); renderActiveSession(document.getElementById('app')); } }; // Timer let timerInterval; function startTimer() { if(timerInterval) clearInterval(timerInterval); const start = appState.activeWorkout.startTime; const el = document.getElementById('timer'); timerInterval = setInterval(() => { if(!el) return; const diff = Math.floor((Date.now() - start) / 1000); const m = Math.floor(diff / 60).toString().padStart(2, '0'); const s = (diff % 60).toString().padStart(2, '0'); el.innerText = `${m}:${s}`; }, 1000); } // 5. FINALIZAÇÃO & ANÁLISE function finishWorkout() { if(!confirm("Finalizar treino?")) return; clearInterval(timerInterval); const workout = appState.activeWorkout; workout.endTime = Date.now(); workout.duration = Math.floor((workout.endTime - workout.startTime) / 1000 / 60); // Algoritmo de Análise workout.analysis = analyzeWorkout(workout); // Salvar appState.history.unshift(workout); saveHistory(); appState.activeWorkout = null; router('result', workout); } function analyzeWorkout(workout) { let totalSets = 0; let hardSets = 0; // RPE >= 8 let volume = 0; workout.exercises.forEach(ex => { ex.sets.forEach(s => { const w = parseFloat(s.weight) || 0; const r = parseFloat(s.reps) || 0; const rpe = parseFloat(s.rpe) || 0; if(w > 0 && r > 0) { totalSets++; volume += w * r; if(rpe >= 8) hardSets++; } }); }); // Lógica de Notas let grade = 'C'; let feedback = []; const intensity = totalSets > 0 ? hardSets / totalSets : 0; if(intensity > 0.7) { grade = 'S'; feedback.push("🔥 Intensidade Brutal! A maioria das séries foi até a falha ou perto."); } else if (intensity > 0.4) { grade = 'A'; feedback.push("✅ Bom trabalho. Manteve uma intensidade decente."); } else { grade = 'B'; feedback.push("⚠️ Dica: Aumente a carga ou vá mais perto da falha (RPE alto)."); } if(totalSets < 8) feedback.push("📉 Volume baixo. Considere adicionar mais exercícios."); if(totalSets > 24) feedback.push("🛑 Volume muito alto. Cuidado com overtraining."); return { grade, feedback, volume, totalSets }; } function renderResult(container, workout) { const colors = { 'S': 'text-purple-400', 'A': 'text-green-400', 'B': 'text-blue-400', 'C': 'text-yellow-400' }; const color = colors[workout.analysis.grade] || 'text-white'; let html = ` <div class="fade-in pt-6 pb-20 text-center"> <div class="mb-6"> <p class="text-gray-400 uppercase text-xs tracking-widest mb-2">Relatório do Treino</p> <div class="inline-block p-8 rounded-full bg-gray-800 border-4 border-gray-700 shadow-2xl mb-4"> <h1 class="text-6xl font-black ${color}">${workout.analysis.grade}</h1> </div> <p class="text-white font-bold text-xl">${workout.duration} minutos</p> </div> <div class="grid grid-cols-2 gap-4 mb-8 text-left"> <div class="card bg-gray-800 mb-0"> <p class="text-xs text-gray-500 uppercase">Volume</p> <p class="text-xl font-bold text-white">${(workout.analysis.volume / 1000).toFixed(1)}t</p> </div> <div class="card bg-gray-800 mb-0"> <p class="text-xs text-gray-500 uppercase">Séries Válidas</p> <p class="text-xl font-bold text-white">${workout.analysis.totalSets}</p> </div> </div> <div class="space-y-3 mb-8 text-left"> ${workout.analysis.feedback.map(f => ` <div class="p-3 bg-gray-800 border-l-4 border-blue-500 rounded text-sm text-gray-300">${f}</div> `).join('')} </div> <button onclick="router('home')" class="w-full bg-gray-700 hover:bg-gray-600 py-4 rounded-xl font-bold text-white mb-20">VOLTAR AO INÍCIO</button> </div>`; container.innerHTML = html; } // 6. HISTÓRICO function renderHistory(container) { if(appState.history.length === 0) { container.innerHTML = `<div class="fade-in text-center mt-32 text-gray-500"><p>Nenhum treino registrado.</p></div>`; return; } let html = `<div class="fade-in pb-20"><h2 class="text-2xl font-bold mb-6">Seu Histórico</h2><div class="space-y-4">`; appState.history.forEach(w => { const date = new Date(w.startTime); html += ` <div class="card relative overflow-hidden"> <div class="absolute right-0 top-0 p-2 opacity-10"> <span class="text-6xl font-black">${w.analysis.grade}</span> </div> <div class="relative z-10"> <div class="flex justify-between items-baseline mb-1"> <h3 class="font-bold text-white text-lg">${w.dayName}</h3> <span class="text-xs text-gray-400">${date.toLocaleDateString()}</span> </div> <p class="text-sm text-gray-400 mb-2">${w.duration} min • ${(w.analysis.volume/1000).toFixed(1)} ton</p> <div class="flex flex-wrap gap-1"> ${w.exercises.slice(0, 3).map(e => `<span class="px-2 py-1 bg-gray-800 rounded text-[10px] text-gray-500 border border-gray-700">${e.name}</span>`).join('')} ${w.exercises.length > 3 ? `<span class="px-2 py-1 text-[10px] text-gray-600">+${w.exercises.length - 3}</span>` : ''} </div> </div> </div>`; }); html += `</div></div>`; container.innerHTML = html; } // 7. SETTINGS function renderSettings(container) { const totalWorkouts = appState.history.length; const totalTon = appState.history.reduce((acc, curr) => acc + (curr.analysis.volume || 0), 0) / 1000; container.innerHTML = ` <div class="fade-in pb-20"> <h2 class="text-2xl font-bold mb-6">Estatísticas</h2> <div class="grid grid-cols-2 gap-4 mb-8"> <div class="card text-center py-6"> <p class="text-3xl font-bold text-blue-500">${totalWorkouts}</p> <p class="text-[10px] uppercase text-gray-500 tracking-widest mt-1">Treinos</p> </div> <div class="card text-center py-6"> <p class="text-3xl font-bold text-purple-500">${totalTon.toFixed(0)}</p> <p class="text-[10px] uppercase text-gray-500 tracking-widest mt-1">Toneladas</p> </div> </div> <div class="card bg-red-900/20 border border-red-900/50"> <h3 class="text-red-500 font-bold mb-2">Zona de Perigo</h3> <p class="text-xs text-red-300 mb-4">Isso apagará todo seu histórico local permanentemente.</p> <button onclick="if(confirm('Tem certeza absoluta?')){localStorage.removeItem('hyperHistory'); location.reload();}" class="w-full py-2 bg-red-600 hover:bg-red-700 rounded text-white text-sm font-bold">RESETAR TUDO</button> </div> <p class="text-center text-xs text-gray-600 mt-8">HyperScience PWA v2.0</p> </div>`; } // INIT document.addEventListener('DOMContentLoaded', () => { router('home'); }); </script><script> // PWA Service Worker Registration if ('serviceWorker' in navigator) { navigator.serviceWorker.register('sw.js') .then(reg => console.log('SW registrado', reg)) .catch(err => console.log('Erro SW', err)); } </script></body> </html> Meu manifest.json: { "name": "HyperScience", "short_name": "HyperScience", "start_url": "./index.html", "display": "standalone", "background_color": "#111827", "theme_color": "#1f2937", "orientation": "portrait", "icons": [ { "src": "https://img.icons8.com/ios-filled/192/4a90e2/dumbbell.png", "sizes": "192x192", "type": "image/png" }, { "src": "https://img.icons8.com/ios-filled/512/4a90e2/dumbbell.png", "sizes": "512x512", "type": "image/png" } ] } Meu script.js: // --- DADOS CIENTÍFICOS & PRESETS --- const WORKOUT_PLANS = { 'ppl': { name: 'PPL (Push/Pull/Legs)', desc: 'Alta frequência, foco em sinergistas.', days: [ { id: 'push', name: 'Empurrar (Peito/Ombro/Tríceps)', exercises: ['Supino Reto (Barra/Halter)', 'Desenvolvimento Militar', 'Supino Inclinado', 'Elevação Lateral', 'Tríceps Polia'] }, { id: 'pull', name: 'Puxar (Costas/Bíceps/Trapézio)', exercises: ['Levantamento Terra', 'Puxada Alta ou Barra Fixa', 'Remada Curvada', 'Face Pull', 'Rosca Direta', 'Rosca Martelo'] }, { id: 'legs', name: 'Pernas (Completo)', exercises: ['Agachamento Livre', 'Leg Press', 'Stiff ou RDL', 'Cadeira Extensora', 'Mesa Flexora', 'Panturrilha em Pé'] } ] }, 'upper_lower': { name: 'Upper / Lower', desc: 'Equilíbrio perfeito para descanso.', days: [ { id: 'upper1', name: 'Superiores A (Foco Força)', exercises: ['Supino Reto', 'Remada Curvada', 'Desenvolvimento', 'Barra Fixa', 'Tríceps Testa', 'Rosca Direta'] }, { id: 'lower1', name: 'Inferiores A (Foco Agachamento)', exercises: ['Agachamento Livre', 'Afundo', 'Cadeira Extensora', 'Mesa Flexora', 'Panturrilha'] }, { id: 'upper2', name: 'Superiores B (Foco Hipertrofia)', exercises: ['Supino Inclinado Halter', 'Puxada Alta', 'Elevação Lateral', 'Peck Deck', 'Tríceps Corda', 'Rosca Scott'] }, { id: 'lower2', name: 'Inferiores B (Foco Posterior)', exercises: ['Levantamento Terra ou RDL', 'Leg Press', 'Mesa Flexora', 'Cadeira Adutora', 'Panturrilha Sentado'] } ] }, 'arnold': { name: 'Arnold Split', desc: 'Peito/Costas, Ombro/Braço, Perna.', days: [ { id: 'chest_back', name: 'Peito e Costas', exercises: ['Supino Reto', 'Barra Fixa', 'Supino Inclinado', 'Remada Curvada', 'Crucifixo', 'Pullover'] }, { id: 'delt_arm', name: 'Ombros e Braços', exercises: ['Desenvolvimento', 'Elevação Lateral', 'Rosca Direta', 'Tríceps Testa', 'Rosca Concentrada', 'Tríceps Francês'] }, { id: 'legs_abs', name: 'Pernas e Abdomem', exercises: ['Agachamento', 'Leg Press', 'Stiff', 'Extensora', 'Panturrilha', 'Abdominal Infra'] } ] } }; // --- ESTADO DO APP --- let appState = { currentPlan: null, history: JSON.parse(localStorage.getItem('hyperHistory')) || [], activeWorkout: null, startTime: null };
// --- ROTEAMENTO SIMPLES ---
function router(view, params = null) {
const app = document.getElementById('app');
app.innerHTML = '';

text

if (view === 'home') renderHome(app);
else if (view === 'workout_select') renderWorkoutSelect(app, params);
else if (view === 'active_session') renderActiveSession(app, params);
else if (view === 'history') renderHistory(app);
else if (view === 'result') renderResult(app, params);
else if (view === 'settings') renderSettings(app);
}

// --- VIEWS ---

function renderHome(container) {
let html = <div class="fade-in space-y-4"> <h2 class="text-2xl font-bold mb-4">Escolha sua Estratégia</h2>;

text

for (const [key, plan] of Object.entries(WORKOUT_PLANS)) {
html += <div onclick="router('workout_select', '${key}')" class="card active:scale-95 transition transform cursor-pointer border border-gray-700 hover:border-blue-500"> <h3 class="text-xl font-bold text-blue-400">${plan.name}</h3> <p class="text-gray-400 text-sm mt-1">${plan.desc}</p> </div>;
}

// Botão de Treino Rápido (Histórico recente)
if(appState.history.length > 0) {
html += <div class="mt-8 pt-4 border-t border-gray-700"> <h3 class="text-lg font-bold mb-2">Último Treino Realizado</h3> <div onclick="alert('Funcionalidade: Repetir último treino (em breve)')" class="card bg-gray-800 opacity-75"> <p class="text-sm">Repetir: ${new Date(appState.history[0].date).toLocaleDateString()}</p> </div> </div>;
}

html += </div>;
container.innerHTML = html;
}

function renderWorkoutSelect(container, planKey) {
const plan = WORKOUT_PLANS[planKey];
let html = <div class="fade-in pb-20"> <button onclick="router('home')" class="mb-4 text-blue-400 text-sm">← Voltar</button> <h2 class="text-2xl font-bold mb-4">${plan.name}</h2> <p class="mb-4 text-gray-400">Qual dia você vai treinar hoje?</p>;

text

plan.days.forEach((day, index) => {
// Truque para passar objeto como string no onclick (não ideal, mas funciona para copy/paste simples)
// Vamos apenas passar o índice e recriar o objeto
html += <div onclick="startWorkout('${planKey}', ${index})" class="card active:scale-95 transition cursor-pointer flex justify-between items-center"> <div> <h3 class="font-bold text-lg">${day.name}</h3> <p class="text-xs text-gray-500">${day.exercises.length} Exercícios</p> </div> <div class="bg-blue-600 rounded-full p-2"> <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> </div> </div>;
});

html += </div>;
container.innerHTML = html;
}

function startWorkout(planKey, dayIndex) {
const plan = WORKOUT_PLANS[planKey];
const day = plan.days[dayIndex];

text

appState.activeWorkout = {
planName: plan.name,
dayName: day.name,
exercises: day.exercises.map(ex => ({
name: ex,
sets: [{weight: '', reps: '', rpe: ''}] // Começa com 1 set vazio
})),
startTime: Date.now()
};
router('active_session');
}

function renderActiveSession(container) {
const workout = appState.activeWorkout;
let html = <div class="fade-in pb-24"> <div class="flex justify-between items-end mb-4"> <div> <h2 class="text-xl font-bold text-white">${workout.dayName}</h2> <p class="text-xs text-blue-400" id="timer">00:00</p> </div> <button onclick="finishWorkout()" class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">FINALIZAR</button> </div>;

text

workout.exercises.forEach((ex, exIndex) => {
html += `<div class="card border border-gray-700">
<h3 class="font-bold text-lg mb-2 text-blue-300">${ex.name}</h3>

text

    <div class="grid grid-cols-4 gap-2 text-xs text-gray-500 mb-1 text-center">
        <span>KG</span>
        <span>REPS</span>
        <span>RPE (1-10)</span>
        <span></span>
    </div>

    <div id="sets-container-${exIndex}">`;
    
ex.sets.forEach((set, setIndex) => {
    html += renderSetRow(exIndex, setIndex, set);
});

html += `</div>
    <button onclick="addSet(${exIndex})" class="w-full mt-3 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm text-blue-300 font-bold">+ Adicionar Série</button>
</div>`;
});

html += </div>;
container.innerHTML = html;

// Iniciar Timer
if(!window.workoutTimer) {
window.workoutTimer = setInterval(() => {
const diff = Math.floor((Date.now() - appState.activeWorkout.startTime) / 1000);
const m = Math.floor(diff / 60).toString().padStart(2, '0');
const s = (diff % 60).toString().padStart(2, '0');
const el = document.getElementById('timer');
if(el) el.innerText = ${m}:${s};
}, 1000);
}
}

function renderSetRow(exIndex, setIndex, setVal) {
return <div class="grid grid-cols-4 gap-2 mb-2 items-center"> <input type="number" placeholder="kg" value="${setVal.weight}" onchange="updateSet(${exIndex}, ${setIndex}, 'weight', this.value)"> <input type="number" placeholder="reps" value="${setVal.reps}" onchange="updateSet(${exIndex}, ${setIndex}, 'reps', this.value)"> <input type="number" placeholder="7-10" value="${setVal.rpe}" max="10" class="${setVal.rpe >= 9 ? 'text-red-400 border-red-900' : ''}" onchange="updateSet(${exIndex}, ${setIndex}, 'rpe', this.value)"> <button onclick="removeSet(${exIndex}, ${setIndex})" class="text-red-500 font-bold text-xl">×</button> </div>;
}

// --- LÓGICA DE INPUT E DADOS ---

window.updateSet = (exIndex, setIndex, field, value) => {
appState.activeWorkout.exercises[exIndex].sets[setIndex][field] = value;
};

window.addSet = (exIndex) => {
const prevSet = appState.activeWorkout.exercises[exIndex].sets[appState.activeWorkout.exercises[exIndex].sets.length - 1];
// Copia os dados do set anterior para facilitar
appState.activeWorkout.exercises[exIndex].sets.push({...prevSet});
router('active_session'); // Re-renderiza (bruto, mas funciona para vanilla)
};

window.removeSet = (exIndex, setIndex) => {
if(appState.activeWorkout.exercises[exIndex].sets.length > 1) {
appState.activeWorkout.exercises[exIndex].sets.splice(setIndex, 1);
router('active_session');
}
};

window.finishWorkout = () => {
if(!confirm("Finalizar treino e gerar relatório?")) return;
clearInterval(window.workoutTimer);
window.workoutTimer = null;

text

const workout = appState.activeWorkout;
workout.endTime = Date.now();
workout.duration = Math.floor((workout.endTime - workout.startTime) / 1000 / 60); // min

// ANÁLISE CRÍTICA (O ALGORITMO)
const analysis = analyzeWorkout(workout);

// Salvar
workout.analysis = analysis;
appState.history.unshift(workout);
localStorage.setItem('hyperHistory', JSON.stringify(appState.history));

appState.activeWorkout = null;
router('result', workout);
};

// --- O JUIZ SINCERO (ALGORITMO) ---
function analyzeWorkout(workout) {
let totalSets = 0;
let hardSets = 0; // RPE >= 7
let failureSets = 0; // RPE >= 9
let totalVolume = 0;
let missedData = 0;

text

workout.exercises.forEach(ex => {
ex.sets.forEach(set => {
if(!set.weight || !set.reps) {
missedData++;
return;
}
const w = parseFloat(set.weight);
const r = parseFloat(set.reps);
const rpe = parseFloat(set.rpe) || 0;

text

    totalSets++;
    totalVolume += w * r;

    if(rpe >= 7) hardSets++;
    if(rpe >= 9) failureSets++;
});
});

// Calcular Nota
let score = 0;
let feedback = [];
let grade = "C";

// 1. Consistência
if(missedData > 0) feedback.push("❌ Você esqueceu de anotar cargas em alguns exercícios.");

// 2. Intensidade (RPE) - O mais importante cientificamente
const intensityRatio = totalSets > 0 ? hardSets / totalSets : 0;

if (intensityRatio >= 0.8) {
score += 40;
feedback.push("🔥 Intensidade Excelente! A maioria das séries foi efetiva.");
} else if (intensityRatio >= 0.5) {
score += 20;
feedback.push("⚠️ Intensidade Média. Muitas séries longe da falha (Junk Volume).");
} else {
feedback.push("💩 Intensidade Baixa. Você foi treinar ou passear? Aumente a carga.");
}

// 3. Volume
if(totalSets >= 10 && totalSets <= 25) {
score += 30;
feedback.push("✅ Volume de treino dentro do ideal por sessão.");
} else if (totalSets < 10) {
feedback.push("📉 Volume baixo. Poderia ter feito mais exercícios.");
} else {
feedback.push("🛑 Volume excessivo. Cuidado com o overtraining.");
}

// 4. Falha
if (failureSets > 0) {
score += 30;
feedback.push("💪 Você atingiu a falha técnica em algumas séries. Ótimo estímulo.");
}

// Gerar Conceito
if (score >= 90) grade = "S (GOD)";
else if (score >= 70) grade = "A (Bom)";
else if (score >= 50) grade = "B (Médio)";
else if (score >= 30) grade = "C (Fraco)";
else grade = "D (Vergonhoso)";

return { grade, feedback, totalVolume, totalSets };
}

function renderResult(container, workout) {
const colorClass = workout.analysis.grade.includes('S') || workout.analysis.grade.includes('A') ? 'text-green-400' : (workout.analysis.grade.includes('D') ? 'text-red-500' : 'text-yellow-400');

text

let html = `<div class="fade-in pb-20 pt-4 text-center">
<h2 class="text-3xl font-bold mb-2">Relatório Brutal</h2>
<p class="text-gray-400 mb-6">Duração: ${workout.duration} min</p>

text

<div class="card bg-gray-800 border-2 border-gray-600 mb-6">
    <p class="text-sm text-gray-400 uppercase tracking-widest mb-2">Sua Nota</p>
    <h1 class="text-6xl font-black ${colorClass}">${workout.analysis.grade}</h1>
</div>

<div class="text-left space-y-3 mb-8">
    ${workout.analysis.feedback.map(f => `<p class="p-3 bg-gray-800 rounded border-l-4 border-blue-500 text-sm">${f}</p>`).join('')}
</div>

<div class="grid grid-cols-2 gap-4 mb-8">
    <div class="card bg-gray-800">
        <p class="text-xs text-gray-500">Volume Total</p>
        <p class="text-xl font-bold text-white">${(workout.analysis.totalVolume / 1000).toFixed(1)} <span class="text-sm text-gray-500">ton</span></p>
    </div>
    <div class="card bg-gray-800">
        <p class="text-xs text-gray-500">Séries Totais</p>
        <p class="text-xl font-bold text-white">${workout.analysis.totalSets}</p>
    </div>
</div>

<button onclick="router('home')" class="w-full bg-blue-600 py-4 rounded-xl font-bold text-white shadow-lg text-lg">VOLTAR AO INÍCIO</button>
</div>`;
container.innerHTML = html;
}

function renderHistory(container) {
if(appState.history.length === 0) {
container.innerHTML = <div class="fade-in text-center mt-20 text-gray-500"><p>Nenhum treino realizado ainda.</p><p>Vá puxar ferro!</p></div>;
return;
}

text

let html = <div class="fade-in space-y-4 pb-20"> <h2 class="text-2xl font-bold mb-4">Seu Histórico</h2>;

appState.history.forEach(w => {
html += <div class="card"> <div class="flex justify-between items-start"> <div> <h3 class="font-bold text-white">${w.dayName}</h3> <p class="text-xs text-gray-400">${new Date(w.startTime).toLocaleDateString()} • ${w.duration} min</p> </div> <div class="text-right"> <span class="text-xl font-bold ${w.analysis.grade.includes('A') || w.analysis.grade.includes('S') ? 'text-green-400' : 'text-yellow-400'}">${w.analysis.grade}</span> </div> </div> <p class="text-xs text-gray-500 mt-2">Volume: ${(w.analysis.totalVolume/1000).toFixed(1)} ton</p> </div>;
});

html += </div>;
container.innerHTML = html;
}

function renderSettings(container) {
const totalWorkouts = appState.history.length;
const totalTons = appState.history.reduce((acc, curr) => acc + curr.analysis.totalVolume, 0) / 1000;

text

container.innerHTML = `<div class="fade-in pb-20">
<h2 class="text-2xl font-bold mb-6">Estatísticas Gerais</h2>

text

<div class="card text-center py-8">
    <p class="text-4xl font-bold text-blue-500">${totalWorkouts}</p>
    <p class="text-gray-400 uppercase text-xs tracking-widest">Treinos Concluídos</p>
</div>

<div class="card text-center py-8">
    <p class="text-4xl font-bold text-purple-500">${totalTons.toFixed(1)}</p>
    <p class="text-gray-400 uppercase text-xs tracking-widest">Toneladas Levantadas (Total)</p>
</div>

<div class="mt-8">
    <button onclick="if(confirm('Apagar tudo?')){localStorage.clear(); location.reload();}" class="w-full border border-red-600 text-red-500 py-3 rounded-lg font-bold">RESETAR DADOS</button>
    <p class="text-xs text-gray-600 text-center mt-2">Cuidado: Isso apaga seu histórico local.</p>
</div>
</div>`; }
// Inicialização
document.addEventListener('DOMContentLoaded', () => {
router('home');
});
Meu style.css: body {
-webkit-tap-highlight-color: transparent;
overscroll-behavior-y: none;
}
.safe-area-pb {
padding-bottom: env(safe-area-inset-bottom);
}
/* Animação suave */
.fade-in {
animation: fadeIn 0.3s ease-in-out;
}
@keyframes fadeIn {
from { opacity: 0; transform: translateY(10px); }
to { opacity: 1; transform: translateY(0); }
}
.card {
background: #1f2937;
border-radius: 1rem;
padding: 1rem;
margin-bottom: 1rem;
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
input[type="number"] {
background: #374151;
color: white;
border: 1px solid #4b5563;
border-radius: 0.5rem;
padding: 0.5rem;
width: 100%;
text-align: center;
font-size: 1.2rem;
}
.grade-A { color: #34d399; }
.grade-B { color: #60a5fa; }
.grade-C { color: #fbbf24; }
.grade-D { color: #f87171; }
Meu sw.js: const CACHE_NAME = 'hyperscience-v2-singlefile';
const urlsToCache = [
'./',
'./index.html',
'./manifest.json',
'https://cdn.tailwindcss.com'
];

self.addEventListener('install', event => {
self.skipWaiting();
event.waitUntil(
caches.open(CACHE_NAME)
.then(cache => cache.addAll(urlsToCache))
);
});
self.addEventListener('activate', event => {
event.waitUntil(
caches.keys().then(cacheNames => {
return Promise.all(
cacheNames.map(cacheName => {
if (cacheName !== CACHE_NAME) {
return caches.delete(cacheName);
}
})
);
})
);
self.clients.claim();
});

self.addEventListener('fetch', event => {
event.respondWith(
caches.match(event.request)
.then(response => {
if (response) return response;
return fetch(event.request).then(
response => {
if(!response || response.status !== 200 || response.type !== 'basic') {
return response;
}
var responseToCache = response.clone();
caches.open(CACHE_NAME)
.then(cache => {
cache.put(event.request, responseToCache);
});
return response;
}
);
})
);
});

O que acha que devo aprimorar, otimizar ou implementar para torna-lo "perfeito"?
Queria adicionar Eu quero que faça tudo que tiver no seu alcance e mais um pouco, quero que faça todas as modificações adequadas para um nível de elite. Eu queria uma nova atualização inovadora, oque você me sugere fazer para criar um app completo, praticamente "perfeito"? EU gostaria que desse uma olhada nos arquivos dele e me desse um a resposta. E outra, eu queria que, quando eu terminasse um treino ele me desse um relatório mais completo sobre o meu treino, quero saber se foi bom, ruim, se foi eficiente e enfim. Outra coisa, gostaria de ter uma maneira de remover algum exercício durante o treino, porque as vezes não da tempo de faze-lo completamente, e isso interfere no meu resultado, não gosto de ser "obrigado" a fazer um exercício se eu não tiver tempo. E quero que faça de um jeito que eu possa apenas copiar e colar no GitHub de maneira fácil. Diagnóstico real
Não só “nota”, mas:
Eficiência
Densidade
Qualidade de estímulo
Distribuição de volume
Índice de esforço real
✅ Liberdade total
Remover exercício no meio do treino
Ignorar exercício sem penalização
Auto-save de sessão
Recuperar treino interrompido
✅ Inteligência
Detectar junk volume
Detectar intensidade insuficiente
Detectar overreaching
Avaliar densidade do treino
Classificar eficiência real
Vamos implementar isso agora conceitualmente.
2. NOVO SISTEMA DE RELATÓRIO — NÍVEL CIENTÍFICO
3. REMOVER EXERCÍCIO DURANTE O TREINO
Você quer liberdade.
Implementação simples e elegante:
Dentro de renderActiveSession, adicione um botão:
<button onclick="removeExercise(${exIdx})" class="absolute top-2 right-2 text-red-500 text-xs">
Remover
</button>
E a função:
window.removeExercise = (exIdx) => {
if(confirm("Remover este exercício do treino?")) {
appState.activeWorkout.exercises.splice(exIdx, 1);
renderActiveSession(document.getElementById('app'));
}
};
Agora:
Não afeta nota
Não penaliza
Remove completamente do cálculo
Liberdade total.
Vamos transformar seu analyzeWorkout() em algo de elite.
📊 Métricas que você DEVE calcular
1️⃣ Volume Total
Já tem.
2️⃣ Total de Séries Válidas
Já tem.
3️⃣ Hard Sets (RPE ≥ 8)
4️⃣ Densidade do Treino
densidade = volume / duração
Volume por minuto.
Isso mostra eficiência real.
5️⃣ Eficiência de Estímulo
Fórmula:
eficiência = hardSets / totalSets
Classificação:
0.75 → Estímulo Excelente
0.5–0.75 → Bom
0.3–0.5 → Médio
< 0.3 → Muito fraco
6️⃣ Índice de Intensidade Média
mediaRPE = somaRPE / totalSets
7️⃣ Junk Volume Detector
Se
TotalSets alto
Eficiência baixa
→ Você treinou demais longe da falha.
8️⃣ Classificação final REAL
Agora a nota não pode depender só de intensidade.
Nova fórmula de score:
Intensidade: 40%
Volume ideal: 25%
Densidade: 20%
Consistência (dados preenchidos): 15%
Isso gera uma nota científica.
6. Relatório Final — Exemplo do que você deve exibir
Após treino, mostrar:
📊 RELATÓRIO COMPLETO
Duração
Volume total
Séries válidas
Hard sets
Intensidade média
Densidade (kg/min)
Eficiência (%)
Classificação
🧠 Diagnóstico automático
Exemplos:
🔥 Excelente estímulo hipertrófico.
⚠️ Muito volume longe da falha (junk volume).
📉 Densidade baixa — muito descanso?
💪 Ótimo controle de esforço.
🧬 7. Atualização Inovadora (O Diferencial)
Agora vem o nível realmente inovador:
🔥 Índice de Performance Neural (IPN)
Criar um índice baseado em:
% de séries RPE 9–10
Densidade
Volume
Ele estima:
Treino mais voltado a força
Mais voltado a hipertrofia
Mais metabólico
Isso vira diferencial absurdo.
QUERO APENAS OS CÓDIGOS PRA MIM COPIAR E COLAR NO GITHUB DE FORMA FACIL. SE PRECISO RE-ESCREVA TODOS OS ARQUIVOS







Inputs are processed by third-party AI and responses may be inaccurate.

Arena | Benchmark & Compare the Best AI Models
