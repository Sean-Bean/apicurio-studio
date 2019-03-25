/**
 * @license
 * Copyright 2019 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Component, Inject} from "@angular/core";
import {IAuthenticationService} from "../../../services/auth.service";
import {AbstractPageComponent} from "../../../components/page-base.component";
import {ActivatedRoute} from "@angular/router";
import {Title} from "@angular/platform-browser";

/**
 * The Settings/Profile Page component.
 */
@Component({
    moduleId: module.id,
    selector: "validation-page",
    templateUrl: "validation.page.html",
    styleUrls: ["validation.page.css"]
})
export class ValidationPageComponent extends AbstractPageComponent {

    /**
     * C'tor.
     * @param authService
     * @param route
     * @param titleService
     */
    constructor(@Inject(IAuthenticationService) private authService: IAuthenticationService, route: ActivatedRoute, titleService: Title) {
        super(route, titleService);
    }

    /**
     * The page title.
     * 
     */
    protected pageTitle(): string {
        return "Apicurio Studio - Settings - Validation";
    }

    public loadAsyncPageData(): void {
        console.log("[ValidationPageComponent] loadAsyncPageData")
    }

}
