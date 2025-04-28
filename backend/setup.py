import setuptools

__version__ = "0.0.0"

SRC_REPO = "src"  # tên thư mục chứa source code

setuptools.setup(
    name=SRC_REPO,
    version=__version__,
    description="transformer",
    packages=setuptools.find_packages(),
)
