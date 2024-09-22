export function healthStatus(character) {
    const { health } = character;
  
    if (health > 50) {
      return 'healthy';
    } else if (health <= 50 && health > 15) {
      return 'wounded';
    } else {
      return 'critical';
    }
  }

  export function sortHeroes(heroes) {
    return heroes.sort((a, b) => b.health - a.health);
  }
  
  