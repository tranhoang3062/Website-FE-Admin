import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AlertService } from 'services/alert.service';
import { CategoryService } from 'services/category.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import moment from 'moment';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

    loading: boolean = false;

    paging: any = {
        page: 1,
        page_size: 20,
        total: 0,
    };
    
    ranges: any = {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'This Week': [moment().startOf('week'), moment().endOf('week')],
        'Last Week': [moment().subtract(1, 'week').startOf('week'), moment().subtract(1, 'week').endOf('week')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    };

    maxDate: any;

    dateLimit: any;

    selected: any;

    base64Image: any;
    selectedFile: File[] = [];

    constructor(
        private categoryService: CategoryService,
        private cdr: ChangeDetectorRef,
        private alertService: AlertService,
        private modalService: NgbModal,
    ) {

    }

    ngOnInit(): void {
        this.listCategories();
    }

    listCategories() {
        // this.loading = true;
        this.categoryService.getList({ ...this.paging }).subscribe(res => {
            if (res.status == 'success') {

            }
            this.loading = false;
            this.cdr.detectChanges();
        });
    }

    createCategory() {
        // this.loading = true;
        this.categoryService.createCategory({}).subscribe(res => {
            if (res.status == 'success') {

            }
            this.loading = false;
            this.cdr.detectChanges();
        });
    }

    updateCategory(id: any) {
        // this.loading = true;
        this.categoryService.updateCategory(id, {}).subscribe(res => {
            if (res.status == 'success') {

            }
            this.loading = false;
            this.cdr.detectChanges();
        });
    }

    deleteCategory(id: any) {
        // this.loading = true;
        this.categoryService.deleteCategory(id).subscribe(res => {
            if (res.status == 'success') {
                
            }
            this.loading = false;
            this.cdr.detectChanges();
        });
    }

    openModal(modal: any, item?: any) {
        if (item) {

        }
        this.modalService.open(modal, { centered: true });
    }

    closeModal() {
        this.modalService.dismissAll();
    }

    changePage(e: any) {
        this.paging.page = e;
        this.listCategories();
    }

    onInputClick(event: any) {
        event.target.value = '';
    }

    onFileChanged(event: any, form?: any) {
        if (event.target.files[0].type.indexOf('image') < 0) {
            this.alertService.fireSmall('error', 'File upload must be image!');
        } else {
            if (event.target.files[0].size > 512000) {
                this.alertService.fireSmall('error', 'Image must be less than 500KB!');
            } else {
                this.selectedFile[0] = event.target.files[0];
                this.readThis(event.target);
            }
        }
    }

    readThis(inputValue: any): void {
        const file: File = inputValue.files[0];
        const myReader: FileReader = new FileReader();

        myReader.onloadend = (e) => {
            this.base64Image = myReader.result;
        };
        myReader.readAsDataURL(file);
    }

}
