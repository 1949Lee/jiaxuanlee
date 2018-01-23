import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { 
  DEFAULT_BREAKPOINTS, 
  BREAKPOINTS, 
  BreakPoint, 
  validateSuffixes 
} from '@angular/flex-layout'

/**
 * For mobile and tablet, reset ranges
 */
function updateBreakpoints(bp:BreakPoint) {
  switch(bp.alias) {
    case 'xs'    : bp.mediaQuery =  '(max-width: 575.99px) and (orientation: portrait), (max-width: 575.99px) and (orientation: landscape)'; break;
    case 'sm'    : bp.mediaQuery =  '(min-width: 576px) and (max-width: 767.99px) and (orientation: portrait), (min-width: 576px) and (max-width: 767.99px) and (orientation: landscape)'; break;
    case 'md'    : bp.mediaQuery =  '(min-width: 768px) and (max-width: 991.99px) and (orientation: portrait), (min-width: 768px) and (max-width: 991.99px) and (orientation: landscape)'; break;
    case 'lg'    : bp.mediaQuery =  '(min-width: 992px) and (max-width: 1199.99px) and (orientation: portrait), (min-width: 992px) and (max-width: 1199.99px) and (orientation: landscape)'; break;
    case 'xl'    : bp.mediaQuery =  '(min-width: 1200px) and (orientation: portrait), (min-width: 1200px) and (orientation: landscape)'; break;
  }
  return bp;
}

@NgModule({
  imports : [ FlexLayoutModule ],
  exports : [ FlexLayoutModule ],
  providers: [
    // register a Custom BREAKPOINT Provider
    {
      provide: BREAKPOINTS,
      useFactory : function customizeBreakPoints() {
        return validateSuffixes(DEFAULT_BREAKPOINTS.map( updateBreakpoints ));
      }
    }
  ]
})
export class CustomBreakpointsModule { }