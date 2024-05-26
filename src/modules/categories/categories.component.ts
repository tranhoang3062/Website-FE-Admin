import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AlertService } from 'services/alert.service';
import { CategoryService } from 'services/category.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import moment from 'moment';
import { UploadService } from 'services/upload.service';
import { FormControl, FormGroup } from '@angular/forms';
import { fontAwesomeSolidIcons, fontAwesomeBrandsIcons, fontAwesomeRegularIcons } from '../icons';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';
// import { trim } from 'lodash';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

    icon = fontAwesomeSolidIcons;

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

    dataList: any = [];

    title: any;

    lang: any;

    file: any;

    type: any;

    id: any;

    statusConfig: any = [{ label: 'Active', value: 1 }, { label: 'Inactive', value: -1 }]

    searchForm: any = new FormGroup({
        id: new FormControl(null),
        name: new FormControl(null),
        sattus: new FormControl(null),
        hot: new FormControl(null)
    });

    form: any = new FormGroup({
        name: new FormControl(null),
        description: new FormControl(null),
        avatar: new FormControl(null),
        slug: new FormControl(null),
        status: new FormControl(-1),
        hot: new FormControl(-1)
    });

    constructor(
        private categoryService: CategoryService,
        private cdr: ChangeDetectorRef,
        private alertService: AlertService,
        private modalService: NgbModal,
        private uploadService: UploadService,
        private translate: TranslateService
    ) {
        this.lang = localStorage.getItem('lang');
        this.translate.use(this.lang);
    }

    ngOnInit(): void {
        this.listCategories();
    }

    search() {
        this.paging.page = 1;
        this.listCategories();
    }

    reset() {
        this.searchForm.reset();
        this.paging.page = 1;
        this.listCategories();
    }

    listCategories() {
        this.loading = true;
        this.categoryService.getList({ ...this.paging, ...this.searchForm.value }).subscribe(res => {
            if (res.status == 'success') {
                this.dataList = res.data.categories;
                this.paging.total = res.data.meta.total;
            } else this.alertService.fireSmall('error', res?.message);
            this.loading = false;
            this.cdr.detectChanges();
        }, error => {
            this.alertService.fireSmall('error', error?.message);
            this.loading = false;
            this.cdr.detectChanges();
        });
    }

    createCategory() {
        this.loading = true;
        this.categoryService.createCategory(this.form.value).subscribe(res => {
            if (res.status == 'success') {
                this.alertService.fireSmall('success', this.lang == 'en' ? 'Create successfully!' : 'Tạo thành công!');
                this.listCategories();
                this.closeModal();
            } else this.alertService.fireSmall('error', res?.error?.message || res?.message);
            this.loading = false;
            this.cdr.detectChanges();
        }, error => {
            this.alertService.fireSmall('error', error?.message);
            this.loading = false;
            this.cdr.detectChanges();
        });
    }

    updateCategory(id: any) {
        this.loading = true;
        this.categoryService.updateCategory(id, this.form.value).subscribe(res => {
            if (res.status == 'success') {
                this.alertService.fireSmall('success', this.lang == 'en' ? 'Create successfully!' : 'Tạo thành công!');
                this.listCategories();
                this.closeModal();
            } else this.alertService.fireSmall('error', res?.error?.message || res?.message);
            this.loading = false;
            this.cdr.detectChanges();
        }, error => {
            this.alertService.fireSmall('error', error?.message);
            this.loading = false;
            this.cdr.detectChanges();
        });
    }

    deleteCategory(id: any) {
        Swal.fire({
            title: this.lang == 'en' ? 'Are you sure to delete?' : 'Bạn chắc chắn muốn xóa?',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: this.lang == 'en' ? 'Confirm' : 'Xác nhận',
            cancelButtonText: this.lang == 'en' ? 'Cancel' : 'Hủy bỏ'
        }).then((result: any) => {
            if (result.value) {
                this.loading = true;
                this.categoryService.deleteCategory(id).subscribe(res => {
                    if (res.status == 'success') {
                        this.alertService.fireSmall('success', this.lang == 'en' ? 'Delete successfully!' : 'Xóa thành công!');
                        this.listCategories();
                    } else this.alertService.fireSmall('error', res?.error?.message || res?.message);
                    this.loading = false;
                    this.cdr.detectChanges();
                }, error => {
                    this.alertService.fireSmall('error', error?.message);
                    this.loading = false;
                    this.cdr.detectChanges();
                });
            }
        });
    }

    // uploadImage(file: any) {
    //     this.loading = true;
    //     this.uploadService.upload(file).subscribe(res => {
    //         if (res.status == 'success') {
    //             this.form.value.avatar = res.data.path;
    //             if (this.type == 'edit') this.updateCategory(this.id);
    //             else this.createCategory();
    //         }
    //     });
    // }

    submit() {
        // if (this.file) this.uploadImage(this.file);
        // else {
            this.form.value.avatar = this.base64Image;
            if (this.type == 'edit') this.updateCategory(this.id);
            else this.createCategory();
        // }
    }

    openModal(modal: any, type: any, item?: any) {
        this.type = type;
        if (type == 'create') this.title = this.lang == 'en' ? 'Create category' : 'Tạo mới danh mục';
        if (type == 'edit') this.title = this.lang == 'en' ? 'Update category' : 'Cập nhật danh mục';
        console.log(item)
        if (item) {
            this.id = item.id;
            this.form.patchValue({
                name: item.name,
                description: item.description,
                avatar: item.avatar,
                status: item.status,
                hot: item.hot,
                slug: item.slug
            });
            this.base64Image = item.avatar;
        }

        this.modalService.open(modal, { centered: true, size: 'lg', backdrop: 'static' });
    }

    closeModal() {
        this.file = null;
        this.form.reset();
        this.modalService.dismissAll();
    }

    changePage(e: any) {
        this.paging.page = e;
        this.listCategories();
    }

    onInputClick(event: any) {
        event.target.value = '';
    }

    onFileChanged(event: any) {
        console.log(event)
        this.base64Image = event.target.value;
        if (event.target.files[0].type.indexOf('image') < 0) {
            this.alertService.fireSmall('error', this.lang == 'en' ? 'File upload must be image' : 'Tệp tải lên phải có định dạng ảnh');
        } else {
            if (event.target.files[0].size > 2000000) {
                this.alertService.fireSmall('error', this.lang == 'en' ? 'Image must be less than 2MB!' : 'Ảnh phải có kích thước nhỏ hơn 2MB!');
            } else {
                this.file = event.target.files[0];
                this.readThis(event.target);
            }
        }
    }

    readThis(inputValue: any): void {
        const file: File = inputValue.files[0];
        const myReader: FileReader = new FileReader();

        myReader.onloadend = (e) => {
            // this.base64Image = myReader.result;
        };
        myReader.readAsDataURL(file);
    }

    changeStatus(e: any) {
        if (e?.target?.checked) this.form.patchValue({ status: 1 });
        else this.form.patchValue({ status: -1 });
    }

    genSlug(e: any) {
        // let text = trim(e?.target?.value),
        let text = e?.target?.value,
            from = "àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷ",
            to   = "aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy"
        for (let i=0, l=from.length ; i < l ; i++) {
            text = text.replace(RegExp(from[i], "gi"), to[i]);
        }
        text = text.toLowerCase().replace(/[^a-z0-9\-]/g, '-').replace(/-+/g, '-');
        this.form.patchValue({ slug: text });
    }
}
