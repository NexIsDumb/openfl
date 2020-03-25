namespace openfl._internal.backend.dummy;

import openfl.net.FileFilter;
import openfl.net.FileReferenceList;

class DummyFileReferenceListBackend
{
	public new(parent: FileReferenceList) { }

	public browse(typeFilter: Array<FileFilter> = null): boolean
	{
		return false;
	}
}