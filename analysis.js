function analyzeWorkout(workout) {
    let totalSets = 0;
    let hardSets = 0;
    let failureSets = 0;
    let totalVolume = 0;
    let totalRPE = 0;
    let missedData = 0;

    workout.exercises.forEach(ex => {
        ex.sets.forEach(set => {
            const w = parseFloat(set.weight);
            const r = parseFloat(set.reps);
            const rpe = parseFloat(set.rpe);

            if (!w || !r) {
                missedData++;
                return;
            }

            totalSets++;
            totalVolume += w * r;

            if (rpe >= 8) hardSets++;
            if (rpe >= 9) failureSets++;
            if (rpe) totalRPE += rpe;
        });
    });

    const duration = workout.duration || 1;
    const density = totalVolume / duration;
    const efficiency = totalSets ? hardSets / totalSets : 0;
    const avgRPE = totalSets ? totalRPE / totalSets : 0;

    // SCORE
    let score = 0;

    // Intensidade (40%)
    score += efficiency * 40;

    // Volume ideal (25%)
    if (totalSets >= 10 && totalSets <= 25) score += 25;
    else if (totalSets >= 6) score += 15;

    // Densidade (20%)
    if (density > 500) score += 20;
    else if (density > 250) score += 10;

    // Consistência (15%)
    if (missedData === 0) score += 15;

    let grade = "D";
    if (score >= 85) grade = "S";
    else if (score >= 70) grade = "A";
    else if (score >= 55) grade = "B";
    else if (score >= 40) grade = "C";

    const feedback = [];

    if (efficiency > 0.75) feedback.push("🔥 Estímulo extremamente eficiente.");
    else if (efficiency > 0.5) feedback.push("💪 Boa intensidade.");
    else feedback.push("⚠️ Muitas séries longe da falha (junk volume).");

    if (density < 200) feedback.push("⏱ Densidade baixa. Muito descanso?");
    if (failureSets > 0) feedback.push("💥 Séries em falha técnica detectadas.");
    if (missedData > 0) feedback.push("❌ Algumas séries sem dados completos.");

    return {
        grade,
        score: Math.round(score),
        totalVolume,
        totalSets,
        hardSets,
        failureSets,
        density: Math.round(density),
        efficiency: Math.round(efficiency * 100),
        avgRPE: avgRPE.toFixed(1),
        feedback
    };
}
