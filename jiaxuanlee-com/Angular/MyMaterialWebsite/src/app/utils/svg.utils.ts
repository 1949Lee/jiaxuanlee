import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * a utility to load all needed svg resources to the app for md-icon to use
 *
 * @param ir a MdIconRegistry instance to use external svg resources for md-icon use
 * @param ds a DomSanitizer instance to bypass security and return a url
 */
export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
  const imgDir = 'assets/img';
  const appDir = `${imgDir}/app`;
  ir.addSvgIcon('logo', ds.bypassSecurityTrustResourceUrl(`${appDir}/logo.svg`));
  ir.addSvgIcon('ICP', ds.bypassSecurityTrustResourceUrl(`${appDir}/ICP.svg`));
};