import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly categories = ['Tutti', 'Raccolti', 'Mossi', 'Corti'];
  readonly activeCategory = signal('Tutti');
  readonly sent = signal(false);

  readonly looks = [
    { title: 'Silk knot', category: 'Raccolti', type: 'Raccolto', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85', className: 'look--tall' },
    { title: 'Soft waves', category: 'Mossi', type: 'Movimento naturale', image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=85', className: '' },
    { title: 'French crop', category: 'Corti', type: 'Taglio & texture', image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=85', className: '' },
    { title: 'Rose braid', category: 'Raccolti', type: 'Intreccio', image: 'https://images.unsplash.com/photo-1560869713-da86a9ec0744?auto=format&fit=crop&w=900&q=85', className: 'look--wide' },
    { title: 'Golden bob', category: 'Corti', type: 'Bob contemporaneo', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=85', className: '' },
    { title: 'Afterglow', category: 'Mossi', type: 'Onde luminose', image: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=900&q=85', className: 'look--tall' },
  ];

  get filteredLooks() {
    const category = this.activeCategory();
    return category === 'Tutti' ? this.looks : this.looks.filter((look) => look.category === category);
  }

  setCategory(category: string) {
    this.activeCategory.set(category);
  }

  submitForm() {
    this.sent.set(true);
  }
}
