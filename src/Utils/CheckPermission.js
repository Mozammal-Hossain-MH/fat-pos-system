export const checkPermissions = (
  permissionForCheck,
  permissions,
  requireAll = false
) => {
  if (permissions) {
    if (requireAll) {
      return permissionForCheck.every((el) => permissions.includes(el));
    } else {
      return permissionForCheck.some((el) => permissions.includes(el));
    }
  }
};

export const checkModules = (modulesForCheck, modules, requireAll = false) => {
  if (modules?.length) {
    if (requireAll) {
      return modulesForCheck.every((el) => modules.includes(el));
    } else {
      return modulesForCheck.some((el) => modules.includes(el));
    }
  } else {
    return 0;
  }
};
