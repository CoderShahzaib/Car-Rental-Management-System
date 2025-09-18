
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SearchService } from '../../services/search-service';
import { APIResponse } from '../../../models/car';
import { Search } from '../../../models/search';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-head',
  imports: [RouterLink, RouterOutlet, RouterLinkActive,FormsModule],
  templateUrl: './head.html',
  styleUrl: './head.css'
})
export class Head {
  isMenuOpen = false;
  searchTerm: string = '';
  results: Search[] = [];
  router = inject(Router);
  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen
  }

  searchSrv = inject(SearchService);
  onSearch() {
  if (!this.searchTerm.trim()) {
    this.results = [];
    return;
  }

  const id = Number(this.searchTerm);
  if (isNaN(id)) {
    this.results = [];
    return;
  }

  this.searchSrv.getBookingById(id).subscribe({
    next: (res) => {
      if (res.result && res.data) {
        this.results = Array.isArray(res.data) ? res.data : [res.data];
      } else {
        this.results = [];
      }
    },
    error: (err) => {
      console.error('Search API error:', err);
      this.results = [];
    }
  });
}

  getBookingById(id: number) {
    this.searchSrv.getBookingById(id).subscribe((res: APIResponse) => {
      this.results = res.data;
    });
  }
  goToBooking(id: number){
    this.results = [];
    this.searchTerm = '';
    this.router.navigateByUrl(`/bookingDetails/${id}`);
  }

}
