# 2026-10 정적 블로그 의존성 보안 수정

현재 소스는 Gatsby의 정적 HTML·브라우저 JavaScript를 생성합니다. 확인한 전체 빌드에는 SSR, DSG 또는 Gatsby Functions 경로가 없습니다. Netlify에 Node 서버가 상시 노출된 것으로 판단하지 않았습니다. 빌드 도구의 취약한 코드 실행·이미지 처리 경로는 별도 보안 문제이므로 수정합니다.

## 의존성 및 호환성

Gatsby 5.16.1과 같은 계열의 공식 plugin으로 갱신하고, 선언 범위의 간접 의존성을 다시 해결했습니다. MDX 2와 React 18을 유지하고 Prism을 1.30.0으로 갱신합니다.

최신 Gatsby 5 plugin들도 sharp `^0.32.6`을 요구하므로 업데이트만으로 2026-10 librsvg 수정이 반영되지 않습니다. 모든 sharp 경로를 실제 수정 버전 0.35.5로 해결했습니다. 이 변경은 upstream의 선언 범위를 벗어나며 공식 지원을 주장하지 않습니다. 전체 정적 사이트 빌드와 별도 이미지 검증을 통과했고, Node.js 22/24의 Linux CI에서도 같은 검증을 실행하도록 했습니다. 이미지 검증은 manifest/transformer/sharp plugin이 동일한 sharp와 librsvg 2.63.2를 로드하는지, PNG/JPEG/WebP/AVIF 및 SVG 변환과 생성된 Gatsby 이미지가 정상인지 확인합니다.

Gatsby가 정확히 고정한 path-to-regexp는 0.1.13, codegen 경로의 Lodash와 Immutable은 각각 4.18.1과 3.8.4로 해결했습니다. 이들도 상위 패키지의 일부 exact/tilde 범위를 벗어나지만 major와 API 계열을 유지하고 실제 query typegen·빌드로 검증합니다. GraphQL 타입은 프로덕션 빌드에서도 생성하도록 설정했습니다.

저장소에는 package manager 선언과 CI 설치 설정이 없었고, yarn.lock의 마지막 수정이 package-lock.json보다 뒤였습니다. Yarn 1.22.22를 명시하고 오래된 npm lockfile을 제거해 저장소 안에 하나의 재현 가능한 의존성 그래프를 둡니다. 기존 Netlify 대시보드의 설치 명령 재정의 여부는 확인하지 못했습니다. 로컬 `.node-version`은 Node.js 24를 선택하며 Node.js 22/24를 지원 대상으로 설정합니다.

## 검증

Node.js 24.22.1에서 아래 검증을 통과했습니다.

1. `yarn install --frozen-lockfile --ignore-scripts --non-interactive`
2. `GATSBY_CPU_COUNT=2 GATSBY_TELEMETRY_DISABLED=1 yarn build`
3. `yarn typecheck`
4. `yarn test:images`

전체 빌드에서 HTML 45개와 이미지 106개를 생성했습니다. 원래 게시물, MDX와 브라우저 화면 구현을 유지합니다. 빌드·테스트에 자격 증명은 사용하지 않았습니다.

## 남은 권고와 조건

현재 Yarn 감사에는 critical 0개, high 8개, moderate 13개, low 5개의 경로 보고가 남습니다. 같은 advisory가 여러 의존성 경로에 중복 집계되므로 기존 Dependabot 알림 339개와 직접 비교하지 않습니다.

- `serialize-javascript` 6 계열: CSS minifier의 빌드 옵션 직렬화 경로입니다. 악의적 객체/함수 값이 들어가고 생성 문자열을 평가하거나 HTML에 넣는 조건을 검토해야 합니다. 수정 계열은 7.1.3 이상이며 상위 plugin의 major 범위 교체가 필요합니다. 무검증 major 강제 대체는 하지 않았습니다.
- `@graphql-tools/utils`: codegen이 사용하는 간접 의존성입니다. 보고된 원격 공격은 federation/subgraph 결과 병합이 있는 GraphQL 서버를 전제로 합니다. 이 프로젝트는 정적 빌드에서 로컬 schema/query를 사용합니다. 12.0.1로의 major 강제 대체는 하지 않았습니다.
- `webpack-dev-middleware`와 `@parcel/reporter-dev-server`: 개발 서버를 외부에 공개할 경우 별도 검토가 필요합니다. 정적 `public` 산출물에는 해당 HTTP 서버가 없습니다.
- `tmp`: Gatsby CLI의 interactive external-editor 경로이며 신뢰하지 않는 prefix/postfix/dir 옵션이 들어갈 때 문제가 됩니다. 정적 산출물의 HTTP 경로는 아닙니다.
- 나머지 cookie, webpack, file-type, uuid, decode-uri-component, postcss-selector-parser 권고도 감사 결과에 남습니다. 개발/빌드 입력 조건을 검토해야 하며, 감사 0개 또는 모든 경로가 안전하다고 주장하지 않습니다.

## 주요 근거

- https://github.com/lovell/sharp/security/advisories/GHSA-wq5f-xc86-pv6w
- https://github.com/pillarjs/path-to-regexp/security/advisories/GHSA-37ch-88jc-xwx2
- https://github.com/lodash/lodash/security/advisories/GHSA-r5fr-rjxr-66jc
- https://github.com/immutable-js/immutable-js/security/advisories/GHSA-v56q-mh7h-f735
- https://github.com/yahoo/serialize-javascript/security/advisories/GHSA-m5mm-p8h7-m29v
- https://github.com/ardatan/graphql-tools/security/advisories/GHSA-7mx3-vvmw-hjmv
