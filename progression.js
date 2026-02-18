function applyProgression(workout) {
    const history = JSON.parse(localStorage.getItem("hyperHistory")) || [];

    workout.exercises.forEach(ex => {
        const last = history.find(h =>
            h.exercises.some(e => e.name === ex.name)
        );

        if (!last) return;

        const lastExercise = last.exercises.find(e => e.name === ex.name);

        const lastBest = Math.max(...lastExercise.sets.map(s => parseFloat(s.weight) || 0));

        ex.sets.forEach(set => {
            if (!set.weight) {
                set.weight = (lastBest * 1.02).toFixed(1);
            }
        });
    });

    return workout;
}
