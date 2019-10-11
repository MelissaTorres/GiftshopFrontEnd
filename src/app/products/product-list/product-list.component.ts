import { Component, OnInit, OnDestroy } from '@angular/core';

import { ComponentBase } from '../../common/component-base';
import { PaginatedResult } from '../../common/models/paginated-result.model';
import { PaginatedRequest } from '../../common/models/paginated-request.model';
//import { ExamplesService } from '../services/examples.service';
//import { Example } from '../../common/models/example.model';
import { MessageBoxService } from '../../core/services/message-box.service';
import { ErrorHandlerService } from '../../core/services/error-handler.service';